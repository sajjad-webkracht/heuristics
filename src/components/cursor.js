import React, { useEffect } from 'react';
import customCursor from '../images/custom-cursor.svg';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');

        if (!cursor) {
            console.error('Custom cursor element not found');
            return;
        }

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const handleMouseEnter = () => {
            console.log('Mouse entered element');
            cursor.classList.add('custom-cursor-pointer');
        };

        const handleMouseLeave = () => {
            console.log('Mouse left element');
            cursor.classList.remove('custom-cursor-pointer');
        };

        document.addEventListener('mousemove', moveCursor);

        const elements = document.querySelectorAll('button, .cursor-active');
        if (elements.length === 0) {
            console.warn('No elements found to attach event listeners');
        }

        elements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <img src={customCursor} alt="Custom Cursor" className="custom-cursor" />;
};

export default CustomCursor;