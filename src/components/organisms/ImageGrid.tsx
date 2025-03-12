import Image from '@/components/atoms/Image';
import { ReactNode } from 'react';

interface ImageGridProps {
    images: string[];
    altPrefix: string;
    fallback?: ReactNode;
}

/**
 * 圖片網格組件
 *
 * 用於顯示多張圖片的網格布局
 * 支持響應式設計，在不同屏幕尺寸下顯示不同數量的列
 */
const ImageGrid = ({ images, altPrefix, fallback }: ImageGridProps) => {
    if (images.length === 0) {
        return fallback ? (
            <>{fallback}</>
        ) : (
            <div className="text-center py-8">
                <p className="text-lg text-gray-600 mb-4">無法獲取圖片</p>
                <p className="text-sm text-gray-500">可能是資源暫時無法訪問。請稍後再試。</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((imageUrl, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl}
                        alt={`${altPrefix} ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
