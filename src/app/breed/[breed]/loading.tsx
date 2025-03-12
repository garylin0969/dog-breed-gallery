import SkeletonGrid from '@/components/molecules/SkeletonGrid';
import Container from '@/components/atoms/Container';
import BreedHeader from '@/components/molecules/BreedHeader';
import Header from '@/components/organisms/Header';
import { BREED_IMAGE_COUNT } from './page';

/**
 * 品種詳情頁面的加載狀態
 *
 * 在頁面內容加載時顯示骨架屏
 * 使用原子設計架構組織組件
 */
const BreedLoading = () => {
    return (
        <>
            <Header className="px-4 flex items-center">
                <BreedHeader breedName="Loading..." />
            </Header>
            <Container>
                <div className="p-4">
                    <SkeletonGrid count={BREED_IMAGE_COUNT} />
                </div>
            </Container>
        </>
    );
};

export default BreedLoading;
