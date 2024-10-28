import React, { useRef, useEffect } from 'react';

const NoiseEffect = () => {
    const filterRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        let baseFrequency = 1.1;
        let direction = 1;

        const animate = () => {
            if (filterRef.current) {
                baseFrequency += direction * 0.1;
                if (baseFrequency >= 1.9 || baseFrequency <= 1.1) {
                    direction *= -1;
                }
                filterRef.current.setAttribute('baseFrequency', baseFrequency.toFixed(1));
            }
        };

        intervalRef.current = setInterval(animate, 100); // Change every 0.1 second

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div id='f1' className="opacity-30 w-full h-svh absolute top-0 left-0 pointer-events-none z-50">
            <svg width="100%" height="100%">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" ref={filterRef} baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default NoiseEffect;