import Image from '@/components/atoms/Image';
import { ReactNode } from 'react';
import ErrorMessage from '@/components/molecules/ErrorMessage';

interface ImageGridProps {
    images: string[];
    altPrefix: string;
    fallback?: ReactNode;
}

const ImageGrid = ({ images, altPrefix, fallback }: ImageGridProps) => {
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
                />
            ))}
        </div>
    );
};

export default ImageGrid;
