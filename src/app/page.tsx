import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import BreedList from '@/components/organisms/BreedList';

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
                <BreedList searchQuery={search} />
            </Container>
        </>
    );
}
