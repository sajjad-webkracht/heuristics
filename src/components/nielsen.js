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
    return (
        <div className='w-full h-svh absolute top-0 left-0 z-10'>
            <Canvas 
            style={{ width: '100%', height: '100%' }}
            camera={{ position: [0, 0.2, 6], fov: 75 }}
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