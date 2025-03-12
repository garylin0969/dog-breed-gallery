import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

interface Breed {
    breedName: string;
    breedImage: string;
}

interface BreedItemProps {
    breed: Breed;
    priority: boolean;
}

const BreedItem = ({ breed, priority }: BreedItemProps) => {
    const { breedName, breedImage } = breed;

    return (
        <Link href={`/breed/${encodeURIComponent(breedName)}`}>
            <div className="h-20 w-full flex items-center gap-5 px-5">
                <Image
                    src={breedImage}
                    className="rounded-full object-cover aspect-square h-[60px] w-[60px]"
                    width={60}
                    height={60}
                    sizes="60px"
                    alt={`Photo of ${breedName}`}
                    priority={priority}
                />
                <p>{breedName}</p>
            </div>
        </Link>
    );
};

export default memo(BreedItem);
