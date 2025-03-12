import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import Container from '@/components/atoms/Container';
import LoadingBreedList from '@/components/organisms/LoadingBreedList';

export default function HomeLoading() {
    return (
        <>
            <Header className="px-2.5 py-[9px]">
                <SearchBar />
            </Header>
            <Container>
                <LoadingBreedList />
            </Container>
        </>
    );
}
