import React from 'react';
import Opening from '../components/opening'
import { useSpring, animated, easings } from '@react-spring/web';

const S5 = () => {

    const ani1 = useSpring({ 
        from: { width: '100%' },
        to: { width: '0%' },
        delay: 400,
        config: { 
            duration: 700,
            easing: easings.easeInOutSine
         },
     });
     const ani2 = useSpring({ 
        from: { width: '100%' },
        to: { width: '0%' },
        delay: 600,
        config: { 
            duration: 700,
            easing: easings.easeInOutSine
         },
     });


    return (
        <div>
            <Opening />
            <div className='flex absolute z-30 top-0 left-0 h-svh'>
                <div className='w-2/3 px-24 py-12 2xl:pt-20'>
                    <h2 className='bg-ann-500 flex px-5 py-2 2xl:p-8 text-4xl font-bold mb-5 relative 2xl:text-5xl'>05 - Error Prevention <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} /></h2>
                    <h3 className='text-zinc-50 text-xl 2xl:text-3xl mb-2 relative'>
                    Effective error messages are important, but the best designs prevent issues from occurring. Eliminate error-prone conditions or check for them and offer users a confirmation option before finalizing actions.
                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                    </h3>
                    <div className='mt-5'>
                        <ul>
                            <li className='flex justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>1</span>
                                </span>
                                <span className='text-zinc-50 text-base 2xl:text-xl ml-5 relative'>
                                Focus your efforts on preventing high-cost errors first, followed by addressing minor frustrations.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex  justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>2</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Minimize slips by implementing helpful constraints and setting appropriate defaults.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>3</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Prevent mistakes by alleviating memory burdens, enabling an undo feature, and providing warnings to users.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-1/3 pr-24 py-12 2xl:pt-20'>
                    <div className='bg-zinc-700 w-full relative'>
                        <h2 className='bg-zinc-800 text-2xl font-bold p-4 pl-9 text-zinc-50 relative 2xl:pl-12'>Example
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                        </h2>
                        <p className='text-base 2xl:text-lg text-zinc-100 p-4 2xl:p-8 pl-9 2xl:pl-12 relative'>
                        Guardrails on winding mountain roads serve as crucial safety features, preventing drivers from veering off the edge and falling into dangerous drops. These barriers provide a sense of security for motorists navigating sharp turns and steep inclines, ensuring they can focus on the road ahead without the constant fear of losing control. 
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                        </p>
                        <div className='absolute top-0 left-0 w-4 h-full bg-ann-500' />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default S5;