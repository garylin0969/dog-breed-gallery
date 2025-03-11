import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import BreedList from '@/components/organisms/BreedList';

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
                <BreedList searchQuery={search} />
            </Container>
        </>
    );
}
