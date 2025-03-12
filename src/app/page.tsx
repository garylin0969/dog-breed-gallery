import dynamic from 'next/dynamic';
import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import LoadingBreedList from '@/components/organisms/LoadingBreedList';

// 動態導入 BreedList 組件，但預加載它
const BreedList = dynamic(() => import('@/components/organisms/BreedList'), {
    loading: () => <LoadingBreedList />,
    ssr: true,
});

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
                <BreedList searchQuery={search ? decodeURIComponent(search) : ''} />
            </Container>
        </>
    );
}
