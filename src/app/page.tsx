import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import BreedList from '@/components/organisms/BreedList';
import { Suspense } from 'react';
import LoadingBreedList from '@/components/organisms/LoadingBreedList';

interface HomeProps {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const { search } = params;

    return (
        <>
            <Header>
                <SearchBar />
            </Header>
            <Container>
                <Suspense fallback={<LoadingBreedList />}>
                    <BreedList searchQuery={search} />
                </Suspense>
            </Container>
        </>
    );
}
