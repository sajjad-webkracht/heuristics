import React from 'react';
import Opening from '../components/opening'
import { useSpring, animated, easings } from '@react-spring/web';

const S3 = () => {

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
                    <h2 className='bg-ann-500 flex px-5 py-2 2xl:p-8 text-4xl font-bold mb-5 relative 2xl:text-5xl'>03 - User Control and Freedom <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} /></h2>
                    <h3 className='text-zinc-50 text-xl 2xl:text-3xl mb-2 relative'>
                    Users often make accidental actions, so they need a clearly marked "emergency exit" to quickly undo or exit without a lengthy process.
                        <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani1} />
                    </h3>
                    <div className='mt-5'>
                        <ul>
                            <li className='flex justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>1</span>
                                </span>
                                <span className='text-zinc-50 text-base 2xl:text-xl ml-5 relative'>
                                Support Undo and Redo.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex  justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>2</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Provide a clear way to exit the current interaction, such as a "Cancel" button.
                                    <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                                </span>
                            </li>
                            <li className='flex justify-start items-center mb-4'>
                                <span className='bg-ann-500 py-3 px-5 flex justify-center items-center font-bold text-xl'>
                                    <span className='h-6 w-4 flex justify-center items-center'>3</span>
                                </span>
                                <span className='text-zinc-50 text-base ml-5 2xl:text-xl relative'>
                                Ensure the exit is clearly labeled and easy to find.
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
                        Digital environments require quick and accessible emergency exits, just as physical spaces do. Just as we rely on clearly marked exits in buildings to swiftly navigate out of potentially uncomfortable or dangerous situations, users in digital spaces must have straightforward options to exit unwanted interactions or revert actions. 
                                                <animated.div className='h-full bg-ann-500 absolute top-0 left-0' style={ani2} />
                        </p>
                        <div className='absolute top-0 left-0 w-4 h-full bg-ann-500' />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default S3;