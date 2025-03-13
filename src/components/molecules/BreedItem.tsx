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

// 狗狗列表項目
const BreedItem = ({ breed, priority }: BreedItemProps) => {
    const { breedName, breedImage } = breed;

    return (
        <Link href={`/breed/${encodeURIComponent(breedName)}`} scroll={false}>
            <div className="h-20 w-full flex items-center gap-5 px-5">
                <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden">
                    <Image
                        src={breedImage}
                        className="object-cover"
                        fill
                        sizes="60px"
                        alt={`Photo of ${breedName}`}
                        priority={priority}
                        quality={20}
                        loading={priority ? 'eager' : 'lazy'}
                        placeholder="empty"
                    />
                </div>
                <p>{breedName}</p>
            </div>
        </Link>
    );
};

export default memo(BreedItem);
