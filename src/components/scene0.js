import React from 'react';
import Next from '../images/next.svg';
import Opening from '../components/opening';
import Nielsen from '../components/nielsen';

const S0 = ({ changeScene }) => {
    const handleNextClick = () => {
        changeScene(1); // Change to the next scene (Scene1)
    };

    return (
        <div>
            <div className='w-2/3 pl-24 pt-12 absolute z-30 top-0 left-0'>
                <h1 className='text-zinc-50 font-bold text-4xl 2xl:text-7xl mb-2 w-2/3'>
                    <span className='text-8xl 2xl:text-9xl'>
                        10
                    </span><br />
                    secret usability heuristics from Nielsen-chan
                </h1>
                <span className='text-zinc-50 text-base 2xl:text-lg block mb-4 w-1/2'>
                    With decades of mastery in crafting intuitive experiences, Jakob Nielsen reveals his elusive secrets—guiding you to create products so user-friendly, they feel almost enchanted.
                </span>
                <button className='bg-ann-500 flex px-5 py-2 gap-3 font-bold items-center duration-200 hover:gap-6 cursor-none cursor-active' onClick={handleNextClick}>
                    Next
                    <img src={Next} alt='Next' className='ml-8'/>
                </button>
            </div>
            <Opening />
            <Nielsen />
        </div>
    );
};

export default S0;

