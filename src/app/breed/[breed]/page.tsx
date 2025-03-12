import { getRandomBreedImages } from '@/services/dog-apis';
import BreedPhotoGallery from '@/components/organisms/BreedPhotoGallery';
import Container from '@/components/atoms/Container';
import BreedHeader from '@/components/molecules/BreedHeader';
import Header from '@/components/organisms/Header';

// 每個品種顯示的照片數量
export const IMAGE_COUNT = 50;

type BreedPageProps = {
    params: Promise<{ breed: string }>;
};

/**
 * 品種詳情頁面
 *
 * 顯示特定狗狗品種的詳細信息和多張隨機照片
 * 使用原子設計架構組織組件
 */
const BreedPage = async ({ params }: BreedPageProps) => {
    const { breed: encodedBreed } = await params;
    const breedName = decodeURIComponent(encodedBreed);

    // 獲取該品種的照片
    const images = await getRandomBreedImages(breedName, IMAGE_COUNT);

    return (
        <>
            <Header className="px-4 md:px-0">
                <BreedHeader breedName={breedName} />
            </Header>
            <Container>
                <div className="p-4">
                    <BreedPhotoGallery breedName={breedName} images={images} count={IMAGE_COUNT} />
                </div>
            </Container>
        </>
    );
};

export default BreedPage;
