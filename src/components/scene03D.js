import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Box, Cone, Sphere, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/web';


const AnimatedBox = animated(Box);
const AnimatedCone = animated(Cone);
const AnimatedSphere = animated(Sphere);



const useHoverAnimation = (viewport, cursorX, cursorY, initialPosition) => {
    const [hovered, setHovered] = React.useState(false);
    const props = useSpring({
        position: [initialPosition[0] + cursorX * 0.001, initialPosition[1] + cursorY * 0.001, initialPosition[2]],
        rotation: [cursorX * 0.001, cursorY * 0.001, cursorY * 0.001],
        config: { tension: 300, friction: 10 },
    });

    return {
        ...props,
        onPointerOver: () => setHovered(true),
        onPointerOut: () => setHovered(false),
    };
};

const Scene03D = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);


    useEffect(() => {
                // Set initial values for cursorX and cursorY
                setCursorX(window.innerWidth / 2);
                setCursorY(window.innerHeight / 2);
                console.log('Initial cursor position set:', window.innerWidth / 2, window.innerHeight / 2);
        
        const handleMouseMove = (event) => {
            setCursorX(event.clientX);
            setCursorY(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='w-full h-svh absolute top-0 left-0 z-[11]'>
            <Canvas style={{ width: '100%', height: '100%' }} camera={{fov: 55 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1000.0} />
                <pointLight position={[-10, -10, -10]} intensity={400.0} />
                <pointLight position={[-30, 0, -40]} intensity={10.0} color="#D8E430" />          

                <SceneContent cursorX={cursorX} cursorY={cursorY} />
            
            </Canvas>
        </div>
    );
};

const SceneContent = ({ cursorX, cursorY }) => {
    const { viewport } = useThree();
    const boxProps = useHoverAnimation(viewport, cursorX, cursorY, [-5, 10, -14]);
    const box2Props = useHoverAnimation(viewport, cursorX * 2, cursorY, [8, -3, -3]);
    const sphereProps = useHoverAnimation(viewport, cursorX, cursorY, [25, 10, -20]);



    return (
        <>
            <AnimatedBox scale={[5, 5, 5]} args={[1, 1, 1]} {...boxProps}>
                <meshStandardMaterial attach="material" color="#D8E430" metalness={0.2} roughness={0.6} />
            </AnimatedBox>
            <AnimatedBox scale={[4, 4, 4]} args={[1, 1, 1]} {...box2Props}>
                <meshStandardMaterial attach="material" color="#D8E430" metalness={0.2} roughness={0.6} />
            </AnimatedBox>
            <AnimatedSphere scale={[5, 5, 5]} args={[1, 90, 90]} {...sphereProps}>
                <meshStandardMaterial attach="material" color="#D8E430" metalness={0.2} roughness={0.6} />
            </AnimatedSphere>
        </>
    );
};

export default Scene03D;