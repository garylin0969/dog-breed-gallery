import SkeletonGrid from '@/components/molecules/SkeletonGrid';
import Container from '@/components/atoms/Container';
import BreedHeader from '@/components/molecules/BreedHeader';
import Header from '@/components/organisms/Header';

const BreedLoading = () => {
    return (
        <>
            <Header className="px-4 md:px-0">
                <BreedHeader breedName="Loading..." />
            </Header>
            <Container>
                <div className="p-4">
                    <SkeletonGrid count={6} />
                </div>
            </Container>
        </>
    );
};

export default BreedLoading;
