import React from 'react';
import Opening from '../components/opening'
import { useSpring, animated, easings } from '@react-spring/web';

const S10 = () => {

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
        <div className='h-svh overflow-y-hidden'>
            <Opening />
            <div className='flex flex-col lg:flex-row lg:absolute z-30 lg:top-0 lg:left-0 h-svh overflow-y-scroll'>
                <div className='w-full lg:w-2/3 px-5 py-5 lg:px-24 lg:py-12 2xl:pt-20'>
                    <h2 className='bg-ann-500 flex px-5 py-2 2xl:p-8 text-2xl lg:text-4xl font-bold mb-5 relative 2xl:text-5xl'>10 - Help and Documentation  <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} /></h2>
                    <h3 className='text-zinc-50 text-xl 2xl:text-3xl mb-2 relative'>
                    Ideally, the system should be intuitive enough to require no additional explanation. However, it may still be necessary to provide documentation to assist users in completing their tasks.
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                    </h3>
                    <div className='mt-5'>
                        <ul>
                            <li className='flex justify-start items-start lg:items-center mb-4'>
                                <span className='bg-ann-500 mt-1 lg:mt-0 py-3 px-5 flex justify-center items-center font-bold text-lg lg:text-xl'>
                                    <span className='h-4 w-2 lg:h-6 lg:w-4 flex justify-center items-center'>1</span>
                                </span>
                                <span className='text-zinc-50 text-base 2xl:text-xl ml-5 relative'>
                                Make sure the help documentation is easy to navigate and search.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex  justify-start items-start lg:items-center  mb-4'>
                                <span className='bg-ann-500 mt-1 lg:mt-0 py-3 px-5 flex justify-center items-center font-bold text-lg lg:text-xl'>
                                    <span className='h-4 w-2 lg:h-6 lg:w-4 flex justify-center items-center'>2</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Whenever possible, provide documentation in context at the moment the user needs it.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex justify-start items-start lg:items-center  mb-4'>
                                <span className='bg-ann-500 mt-1 lg:mt-0 py-3 px-5 flex justify-center items-center font-bold text-lg lg:text-xl'>
                                    <span className='h-4 w-2 lg:h-6 lg:w-4 flex justify-center items-center'>3</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Outline specific steps to follow.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lg:w-1/3 pr-5 pt-5 pl-5 pb-28 lg:pr-24 lg:py-12 2xl:pt-20'>
                    <div className='bg-zinc-700 w-full relative'>
                        <h2 className='bg-zinc-800 text-xl lg:text-2xl font-bold p-4 pl-9 text-zinc-50 relative 2xl:pl-12'>Example
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                        </h2>
                        <p className='text-base 2xl:text-lg text-zinc-100 p-4 2xl:p-8 pl-9 2xl:pl-12 relative'>
                        Information kiosks at airports are designed to be easily recognizable and are strategically placed to address customers' needs in real time. These kiosks provide immediate solutions to a variety of common issues, such as flight status inquiries, gate information, and wayfinding assistance.
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                        </p>
                        <div className='absolute top-0 left-0 w-4 h-full bg-ann-500' />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default S10;

