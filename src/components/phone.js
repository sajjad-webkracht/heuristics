import React from 'react';

const Phone = () => {
    return (
        <div className='h-svh w-full p-12 flex flex-col justify-center items-start text-zinc-50'>
            <h1 className='font-bold text-2xl mb-2'>Hey, it's for <span className="underline decoration-ann-500">desktop</span> only :(</h1>
            <h2 className='text-lg'>
            To see the full experience, please view this site on a desktop or tablet.
            </h2>
            <div id='f1' className="mix-blend-color-dodge opacity-40 w-full h-svh absolute top-0 left-0 pointer-events-none z-50">
                <svg width="100%" height="100%">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </div>
    );
};

export default Phone;