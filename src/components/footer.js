import React from 'react';
import Left from '../images/left.svg'
import Right from '../images/right.svg'

const Footer = ({ setCurrentScene, currentScene, totalScenes }) => {
    const indicators = Array.from({ length: 11 }, (_, index) => (
        <div
            key={index}
            className={`${
                index === currentScene
                    ? 'w-8 h-3 bg-zinc-50 rounded-full cursor-none cursor-active'
                    : 'w-3 h-3 border-zinc-50 border-solid border-[1px] rounded-full cursor-none cursor-active hover:scale-125 duration-200'
            }`}
            onClick={() => setCurrentScene(index)}
        ></div>
    ));

    const handleNext = () => {
        if (currentScene < totalScenes - 1) {
            setCurrentScene(currentScene + 1);
        }
    };

    const handlePrevious = () => {
        if (currentScene > 0) {
            setCurrentScene(currentScene - 1);
        }
    };

    return (
        <footer className='w-full absolute bottom-0 px-5 pb-5 pt-12 md:px-12 lg:px-24 lg:py-12 z-30 flex justify-between items-center bg-gradient-to-t from-zinc-900 to-[rgba(24,24,27,0)]'>
            <div className='w-1/3 text-base hidden lg:block'>
                <span className='block text-zinc-500'>
                    Made with love️ for the UX community 
                </span>
                <span className='block text-zinc-50'>
                    by <a href='https://sajjaddashti.ir/' className='font-bold underline cursor-none cursor-active hover:text-zinc-300 duration-200'>Sajjad Dashti</a>.
                </span>
            </div>

            <div className='w-full lg:w-1/3 justify-between lg:justify-center flex items-center'>
                <button
                                className={`duration-200 ${currentScene === 0 ? 'opacity-20 cursor-none' : 'hover:scale-105 cursor-active cursor-none'}`}
                                onClick={handlePrevious}
                                disabled={currentScene === 0}
                                >
                    <img src={Left} alt='Previous' className='w-14 h-14' />
                </button>

                <div className='flex gap-1 xl:gap-2 px-3 lg:px-5'>
                {indicators}
                </div>

                <button 
                                className={`duration-200 ${currentScene === totalScenes - 1 ? 'opacity-20 cursor-none' : 'hover:scale-105 cursor-active cursor-none'}`}
                                onClick={handleNext}
                                disabled={currentScene === totalScenes - 1}
                >
                    <img src={Right} alt='Next'  className='w-14 h-14' />
                </button>
            </div>

            <div className='w-1/3 text-base text-right hidden lg:block'>
                <span className='block text-zinc-500'>
                    Check the original article
                </span>
                <span className='block text-zinc-50'>
                    on <a href='https://www.nngroup.com/articles/ten-usability-heuristics/' className='font-bold underline hover:text-zinc-300 duration-200 cursor-none cursor-active'>NNGroup</a>.
                </span>
            </div>
        </footer>
    );
};

export default Footer;