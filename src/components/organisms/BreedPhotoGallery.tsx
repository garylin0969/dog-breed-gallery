import { Suspense } from 'react';
import ImageGrid from '@/components/molecules/ImageGrid';
import SkeletonGrid from '@/components/molecules/SkeletonGrid';

interface BreedPhotoGalleryProps {
    breedName: string;
    images: string[];
    count?: number;
}

// 狗狗照片牆
const BreedPhotoGallery = ({ breedName, images, count = 8 }: BreedPhotoGalleryProps) => {
    return (
        <Suspense fallback={<SkeletonGrid count={count} />}>
            <ImageGrid images={images} altPrefix={breedName} />
        </Suspense>
    );
};

export default BreedPhotoGallery;
