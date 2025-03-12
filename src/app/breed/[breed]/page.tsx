import { getRandomBreedImages } from '@/services/dog-apis';
import BreedPhotoGallery from '@/components/organisms/BreedPhotoGallery';
import Container from '@/components/atoms/Container';
import BreedHeader from '@/components/molecules/BreedHeader';
import Header from '@/components/organisms/Header';

export async function generateMetadata({ params }: BreedPageProps) {
    const { breed: encodedBreed } = await params;
    const breedName = decodeURIComponent(encodedBreed);

    return {
        title: `${breedName} | Dog Breed Gallery`,
    };
}

const BREED_IMAGE_COUNT = 50;

interface BreedPageProps {
    params: Promise<{ breed: string }>;
}

const BreedPage = async ({ params }: BreedPageProps) => {
    const { breed: encodedBreed } = await params;
    const breedName = decodeURIComponent(encodedBreed);

    const breedImages = await getRandomBreedImages(breedName, BREED_IMAGE_COUNT);

    return (
        <>
            <Header className="px-4">
                <BreedHeader breedName={breedName} />
            </Header>
            <Container>
                <div className="p-4">
                    <BreedPhotoGallery breedName={breedName} images={breedImages} count={BREED_IMAGE_COUNT} />
                </div>
            </Container>
        </>
    );
};

export default BreedPage;
