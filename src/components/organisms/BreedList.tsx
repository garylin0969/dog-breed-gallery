import { getAllBreeds } from '@/services/dog-apis';
import BreedItem from '../molecules/BreedItem';

const BreedList = async () => {
    const breeds = await getAllBreeds();

    return (
        <ul>
            {breeds?.map((breed) => (
                <BreedItem key={breed?.breedName} breed={breed} />
            ))}
        </ul>
    );
};

export default BreedList;
