import { Suspense } from 'react';
import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import BreedList from '@/components/organisms/BreedList';
import LoadingBreedList from '@/components/organisms/LoadingBreedList';
interface HomeProps {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const { search } = params;

    return (
        <>
            <Header className="px-2.5 py-[9px]">
                <SearchBar />
            </Header>
            <Container>
                <h1 className="sr-only">Dog Breed Gallery</h1>
                <Suspense fallback={<LoadingBreedList />}>
                    <BreedList searchQuery={search ? decodeURIComponent(search) : ''} />
                </Suspense>
            </Container>
        </>
    );
}
