import React from 'react';
import { useSpring, animated, easings } from '@react-spring/web';

const Slider = () => {
    const props1 = useSpring({ 
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0%)' },
        config: { 
            duration: 700,
            easing: easings.easeInOutSine
         },
     });
     const props2 = useSpring({ 
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0%)' },
        config: { 
            duration: 600,
            easing: easings.easeInOutSine
         },
     });

    return (
        <div className='overflow-hidden h-svh w-full absolute top-0 left-0 z-50 pointer-events-none'>
             <animated.div className='h-svh w-full absolute top-0 left-0 bg-ann-500 pointer-events-none' style={props2}>
             </animated.div>
            <animated.div className='h-svh w-full absolute top-0 left-0 bg-zinc-900 pointer-events-none' style={props1}>
            </animated.div>
        </div>
    );
};

export default Slider;