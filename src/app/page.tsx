import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import BreedList from '@/components/organisms/BreedList';
import { Suspense } from 'react';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams;
    const { search } = searchParams;

    return (
        <>
            <Header>
                <SearchBar />
            </Header>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <BreedList searchQuery={search} />
                </Suspense>
            </Container>
        </>
    );
}
