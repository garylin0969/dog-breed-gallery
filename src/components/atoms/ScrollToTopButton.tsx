'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import cn from '@/lib/cn';
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className={cn(
                'z-10 cursor-pointer',
                'fixed right-6 bottom-6 md:right-12 md:bottom-12',
                'h-10 w-10 rounded-full md:h-12 md:w-12',
                'bg-white text-slate-800',
                'flex items-center justify-center',
                'shadow-md dark:shadow-slate-400',
                'transition-[opacity] duration-200',
                isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
            )}
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
};

export default ScrollToTopButton;
