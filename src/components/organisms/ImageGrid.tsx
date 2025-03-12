'use client';

import Image from '@/components/atoms/Image';
import { ReactNode, useState } from 'react';
import ErrorMessage from '@/components/molecules/ErrorMessage';
import Modal from '@/components/molecules/Modal';
import Carousel from '@/components/molecules/Carousel';

interface ImageGridProps {
    images: string[];
    altPrefix: string;
    fallback?: ReactNode;
}

const ImageGrid = ({ images, altPrefix, fallback }: ImageGridProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (images?.length === 0) {
        return fallback ? (
            fallback
        ) : (
            <ErrorMessage
                title="無法獲取圖片"
                description="可能是該品種名稱格式不正確或 API 暫時無法訪問。請稍後再試。"
            />
        );
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Carousel
                    images={images}
                    altPrefix={altPrefix}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            </Modal>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((imageUrl, index) => (
                    <Image
                        className="rounded-lg w-full aspect-square"
                        key={imageUrl}
                        src={imageUrl}
                        alt={`${altPrefix} ${index + 1}`}
                        width={300}
                        height={300}
                        priority
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default ImageGrid;
