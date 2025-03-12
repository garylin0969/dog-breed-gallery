import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

interface BreedHeaderProps {
    breedName?: string;
}

const BreedHeader = ({ breedName }: BreedHeaderProps) => {
    return (
        <>
            {/* 返回按鈕 */}
            <Link href="/">
                <IoIosArrowBack className="text-2xl" />
            </Link>
            {/* 品種名稱 */}
            <h1 className="text-lg font-medium truncate flex-1 text-center">{breedName}</h1>
        </>
    );
};

export default BreedHeader;
