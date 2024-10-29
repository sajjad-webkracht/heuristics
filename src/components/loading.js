import React from 'react';
import { useSpring, animated, easings } from '@react-spring/web';


const Loading = () => {

    const springs1 = useSpring({
        from: { rotate:0 },
        to: { rotate:365 },
        loop: true,
        delay: 0,
        config: { 
            duration: 1000,

        },
    });
    const springs2 = useSpring({
        from: { rotate:0 },
        to: { rotate:365 },
        loop: true,
        delay: 0,
        config: { 
            duration: 900,

        },
    });

    const springs3 = useSpring({
        from: { rotate:0 },
        to: { rotate:365 },
        loop: true,
        delay: 0,
        config: { 
            duration: 600,

        },
    });

    const left1 = useSpring({
        from: { transform: 'translateX(0%)', opacity: '1' },
        to: { transform: 'translateX(20%)', opacity: '0' },
        delay: 2500,
        config: { 
            duration: 500,
            easing: easings.easeInOutSine
        },
    });
    const left2 = useSpring({
        from: { transform: 'translateX(0%)', opacity: '1' },
        to: { transform: 'translateX(20%)', opacity: '0' },
        delay: 2300,
        config: { 
            duration: 500,
            easing: easings.easeInOutSine
        },
    });
    

    
    return (
        <div className="flex items-center justify-center w-full h-svh bg-zinc-900 text-white">
                    <div id='f1' className="mix-blend-color-dodge opacity-40 w-full h-svh absolute top-0 left-0 pointer-events-none z-50">
            <svg width="100%" height="100%">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
            <animated.div className='w-20 h-20 mr-12' style={left1}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <animated.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#D8E430"
                        strokeWidth="3"
                        fill="none"
                        style={{...springs1,
                            transformOrigin: '50% 50%'
                        }}
                        strokeDasharray="283"
                        strokeDashoffset="75"
                    />
                    <animated.circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="#D8E430"
                        strokeWidth="3"
                        fill="none"
                        style={{...springs2,
                            transformOrigin: '50% 50%'
                        }}
                        strokeDasharray="283"
                        strokeDashoffset="95"
                    />
                                        <animated.circle
                        cx="50"
                        cy="50"
                        r="25"
                        stroke="#D8E430"
                        strokeWidth="3"
                        fill="none"
                        style={{...springs3,
                            transformOrigin: '50% 50%'
                        }}
                        strokeDasharray="243"
                        strokeDashoffset="125"
                    />
                </svg>
            </animated.div>
            <animated.h1 className='text-xl font-bold' style={left2}>Loading...</animated.h1>
        </div>
    );
};

export default Loading;
