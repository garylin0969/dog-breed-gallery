import { Suspense } from 'react';
import ImageGrid from '@/components/molecules/ImageGrid';
import SkeletonGrid from '@/components/molecules/SkeletonGrid';
import ErrorMessage from '@/components/molecules/ErrorMessage';

interface BreedPhotoGalleryProps {
    breedName: string;
    images: string[];
    count?: number;
}

// 狗狗照片牆
const BreedPhotoGallery = ({ breedName, images, count = 8 }: BreedPhotoGalleryProps) => {
    return (
        <Suspense fallback={<SkeletonGrid count={count} />}>
            <ImageGrid
                images={images}
                altPrefix={breedName}
                fallback={
                    <ErrorMessage
                        title={`無法獲取 ${breedName} 的照片`}
                        description="可能是該品種名稱格式不正確或 API 暫時無法訪問。請稍後再試。"
                    />
                }
            />
        </Suspense>
    );
};

export default BreedPhotoGallery;
