import React from 'react';
import Heuristics from '../images/heuristics.svg'
import { useSpring, animated, easings } from '@react-spring/web';

const Background = () => {
    const text1 = useSpring({
        from: { transform: 'translateX(-30%)' },
        to: [
            { transform: 'translateX(100%)' }, 
            { transform: 'translateX(-30%)' } 
          ],
        loop: true,
        delay: 500,
        config: { 
            duration: 10000,
            easing: easings.easeInOutSine
        },
      })

      const text2 = useSpring({
        from: { transform: 'translateX(100%)' },
        to: [
            { transform: 'translateX(-30%)' }, 
            { transform: 'translateX(100%)' } 
          ],
        loop: true,
        delay: 800,
        config: { 
            duration: 15000,
            easing: easings.easeInOutSine
        },
      })

      const text3 = useSpring({
        from: { transform: 'translateX(-30%)' },
        to: [
            { transform: 'translateX(100%)' }, 
            { transform: 'translateX(-30%)' } 
          ],
        loop: true,
        delay: 300,
        config: { 
            duration: 11000,
            easing: easings.easeInOutSine
        },
      })

      const text4 = useSpring({
        from: { transform: 'translateX(100%)' },
        to: [
            { transform: 'translateX(-30%)' }, 
            { transform: 'translateX(100%)' } 
          ],
        loop: true,
        delay: 2100,
        config: { 
            duration: 13000,
            easing: easings.easeInOutSine
        },
      })

      const text5 = useSpring({
        from: { transform: 'translateX(-30%)' },
        to: [
            { transform: 'translateX(100%)' }, 
            { transform: 'translateX(-30%)' } 
          ],
        loop: true,
        delay: 900,
        config: { 
            duration: 12000,
            easing: easings.easeInOutSine
        },
      })

    return (
        <div className="absolute top-0 left-0 -z-10 bg-zinc-900 w-full h-svh pointer-events-none overflow-hidden">
            <animated.img src={Heuristics} alt='Heuristics' className='h-1/5' style={{...text1}} />
            <animated.img src={Heuristics} alt='Heuristics' className='h-1/5' style={{...text2}} />
            <animated.img src={Heuristics} alt='Heuristics' className='h-1/5' style={{...text3}} />
            <animated.img src={Heuristics} alt='Heuristics' className='h-1/5' style={{...text4}} />
            <animated.img src={Heuristics} alt='Heuristics' className='h-1/5' style={{...text5}} />
        </div>
    );
};

export default Background;