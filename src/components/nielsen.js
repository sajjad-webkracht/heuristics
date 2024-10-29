import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import { AnimationMixer, TubeGeometry, Vector3, CatmullRomCurve3, MeshStandardMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';


function Model() {
    const group = useRef();
    const fbx = useLoader(FBXLoader, '/models/nielsen_01.fbx');
    const mixer = useRef();
    const [value, setValue] = useState(-0.3);


    useEffect(() => {
        if (fbx.animations.length) {
            mixer.current = new AnimationMixer(fbx);
            const action = mixer.current.clipAction(fbx.animations[0]);
            action.play();
        }
    }, [fbx]);

    useFrame((state, delta) => {
        mixer.current?.update(delta);
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // Normalize mouse position to range [-0.3, 0.3]
            const normalizedX = (clientX / innerWidth) * 0.6 - 0.3;
            const normalizedY = (clientY / innerHeight) * 0.6 - 0.3;

            // Use either normalizedX or normalizedY based on your requirement
            setValue(normalizedX);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <primitive ref={group} object={fbx} rotation={[0, value, 0]} position={[6, -24, -5]} scale={[0.17, 0.17, 0.17]} />;
}

function Tube() {
    const [value, setValue] = useState(-0.3);
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // Normalize mouse position to range [-0.3, 0.3]
            const normalizedX = (clientX / innerWidth) * 0.6 - 0.3;
            const normalizedY = (clientY / innerHeight) * 0.6 - 0.3;

            // Use either normalizedX or normalizedY based on your requirement
            setValue(normalizedX);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const curve = new CatmullRomCurve3([
        new Vector3(value * 4, 20, -10),
        new Vector3((value * -4) + 9, 0, -10),
        new Vector3(40, (value * -10) - 12, -10)
    ]);

    const tubeGeometry = new TubeGeometry(curve, 60, 1.5, 8, false);
    const material = new MeshStandardMaterial({ color: '#D8E430' });

    return <mesh geometry={tubeGeometry} material={material} />;
}

const Nielsen = () => {
    // Function to get the value based on screen width
const getValueBasedOnScreenWidth = () => {
    return window.innerWidth < 768 ? -4 : 0;
};

// Set initial value
let cameraValue = getValueBasedOnScreenWidth();

// Update value on window resize
window.addEventListener('resize', () => {
    cameraValue = getValueBasedOnScreenWidth();
});


    return (
        <div className='w-full h-2/3 md:h-svh absolute bottom-0 md:bottom-auto md:top-0 left-0 z-10'>
            <div className='md:hidden absolute -top-16 left-0 w-full h-16 bg-gradient-to-t from-zinc-900 to-[rgba(24,24,27,0)] z-[11]' />
            <div className='md:hidden absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-zinc-900 to-[rgba(24,24,27,0)] z-[11]' />
            <Canvas 
            style={{ width: '100%', height: '100%' }}
            camera={{ position: [cameraValue, 0.2, 6], fov: 75 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={2} />
                <directionalLight position={[-10, 10, -8]} intensity={1} color="#D8E430" />
                <Model />
                <Tube />
            </Canvas>
        </div>
    );
}

export default Nielsen;