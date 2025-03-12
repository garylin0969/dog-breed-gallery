import Link from 'next/link';
import Image from '@/components/atoms/Image';
import { memo } from 'react';

interface Breed {
    breedName: string;
    breedImage: string;
}

interface BreedItemProps {
    breed: Breed;
}

const BreedItem = ({ breed }: BreedItemProps) => {
    const { breedName, breedImage } = breed;

    return (
        <Link href={`/breed/${encodeURIComponent(breedName.toLowerCase())}`}>
            <div className="min-h-20 w-full flex items-center gap-5 px-5">
                <Image
                    src={breedImage}
                    className="rounded-full h-[60px] aspect-square"
                    width={60}
                    height={60}
                    alt={`Photo of ${breedName}`}
                />
                <p>{breedName}</p>
            </div>
        </Link>
    );
};

export default memo(BreedItem);
