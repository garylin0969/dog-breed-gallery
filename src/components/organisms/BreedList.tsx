import { getAllBreeds } from '@/services/dog-apis';
import BreedItem from '../molecules/BreedItem';

interface BreedListProps {
    searchQuery?: string;
}

const BreedList = async ({ searchQuery }: BreedListProps) => {
    const breeds = await getAllBreeds();

    const filteredBreeds = searchQuery
        ? breeds.filter((breed) => breed.breedName.toLowerCase().includes(searchQuery.toLowerCase()))
        : breeds;

    return (
        <ul>
            {filteredBreeds?.map((breed) => (
                <li key={breed.breedName} className="border-b-2 border-gray-200 hover:bg-gray-200">
                    <BreedItem breed={breed} />
                </li>
            ))}
        </ul>
    );
};

export default BreedList;
