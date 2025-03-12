import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

const blurDataURL =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==';

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
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                    />
                </div>
                <p>{breedName}</p>
            </div>
        </Link>
    );
};

export default memo(BreedItem);
