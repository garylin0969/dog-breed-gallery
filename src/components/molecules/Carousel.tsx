'use client';

import Image from '@/components/atoms/Image';
import { Dispatch, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    images: string[];
    altPrefix: string;
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Carousel = ({ images, altPrefix, currentIndex, setCurrentIndex }: CarouselProps) => {
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full h-full">
            <div className="h-[calc(100%-112px)] flex justify-around items-center">
                <button className="cursor-pointer" onClick={goToPrevious}>
                    <FaChevronLeft className="text-white text-2xl md:text-4xl" />
                </button>
                <div className="w-64 h-64 flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images?.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`${altPrefix} ${index + 1}`}
                                className="min-w-full min-h-full"
                                width={256}
                                height={256}
                            />
                        ))}
                    </div>
                </div>
                <button className="cursor-pointer" onClick={goToNext}>
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
