import React from 'react';

const Grain = () => {
    return (
        <div id='f1' className="mix-blend-color-dodge opacity-40 w-full h-svh absolute top-0 left-0 pointer-events-none z-50">
            <svg width="100%" height="100%">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default Grain;