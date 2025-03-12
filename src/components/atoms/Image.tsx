import React from 'react';
import NextImage from 'next/image';
import cn from '@/lib/cn';

const fallbackSrc = '/question-mark.svg';

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

const Image = ({ src, alt, width, height, className = '', priority = false }: ImageProps) => {
    return (
        <div className={cn('relative overflow-hidden', className)}>
            <NextImage
                src={src || fallbackSrc}
                alt={alt}
                width={width}
                height={height}
                priority={priority || !src}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
        </div>
    );
};

export default Image;
