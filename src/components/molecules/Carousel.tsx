'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    images: string[];
    altPrefix: string;
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Carousel = ({ images, altPrefix, currentIndex, setCurrentIndex }: CarouselProps) => {
    const navigateToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const navigateToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full h-full">
            <div className="h-[calc(100%-112px)] flex justify-around items-center">
                <button className="cursor-pointer" onClick={navigateToPrevious} aria-label="Previous image">
                    <FaChevronLeft className="text-white text-2xl md:text-4xl" />
                </button>
                <div className="w-64 h-64 md:w-96 md:h-96 flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images?.map((imageUrl, index) => (
                            <Image
                                key={`carousel-image-${index}`}
                                className="object-cover aspect-square w-64 md:w-96"
                                src={imageUrl}
                                alt={`${altPrefix} ${index + 1}`}
                                width={384}
                                height={384}
                                sizes="(max-width: 768px) 256px, 384px"
                            />
                        ))}
                    </div>
                </div>
                <button className="cursor-pointer" onClick={navigateToNext} aria-label="Next image">
                    <FaChevronRight className="text-white text-2xl md:text-4xl" />
                </button>
            </div>
            <div className="h-28 flex justify-center items-center">
                <span className="text-white">
                    {currentIndex + 1} / {images?.length}
                </span>
            </div>
        </div>
    );
};

export default Carousel;
