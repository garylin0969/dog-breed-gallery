import { getAllBreeds } from '@/services/dog-apis';
import ErrorMessage from '@/components/molecules/ErrorMessage';
import BreedItem from '@/components/molecules/BreedItem';

interface BreedListProps {
    searchQuery?: string;
}

// 狗狗列表
const BreedList = async ({ searchQuery }: BreedListProps) => {
    const breeds = await getAllBreeds();

    const filteredBreeds = searchQuery
        ? breeds.filter((breed) => breed?.breedName?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
        : breeds;

    if (!filteredBreeds?.length) {
        return (
            <ErrorMessage
                title="無法獲取列表"
                description="可能是該品種名稱格式不正確或 API 暫時無法訪問。請稍後再試。"
            />
        );
    }

    return (
        <ul>
            {filteredBreeds?.map((breed, index) => (
                <li key={breed?.breedName} className="border-b-2 border-gray-200 hover:bg-gray-200">
                    <BreedItem breed={breed} priority={index < 12} />
                </li>
            ))}
        </ul>
    );
};

export default BreedList;
