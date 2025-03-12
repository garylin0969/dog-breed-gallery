import React from 'react';
import NextImage from 'next/image';
import cn from '@/lib/cn';

const fallbackSrc = '/question-mark.svg';

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    sizes?: string;
    className?: string;
    priority?: boolean;
    onClick?: () => void;
}

const Image = ({ src, alt, width, height, sizes, className = '', priority = false, onClick }: ImageProps) => {
    return (
        <div className={cn('overflow-hidden', className)}>
            <NextImage
                src={src || fallbackSrc}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority || !src}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                onClick={onClick}
            />
        </div>
    );
};

export default Image;
