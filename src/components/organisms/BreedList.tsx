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
            {filteredBreeds?.map((breed, index) => (
                <li key={breed.breedName} className="border-b-2 border-gray-200 hover:bg-gray-200">
                    <BreedItem breed={breed} priority={index < 12} />
                </li>
            ))}
        </ul>
    );
};

export default BreedList;
