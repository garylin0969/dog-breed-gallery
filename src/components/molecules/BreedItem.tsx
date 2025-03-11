import Link from 'next/link';
import Image from '@/components/atoms/Image';
interface BreedItemProps {
    breed: {
        breedName: string;
        breedImage: string;
    };
}

const BreedItem = ({ breed }: BreedItemProps) => {
    return (
        <Link href="/breed/1">
            <div className="min-h-20 w-full flex items-center gap-5 px-5">
                <Image
                    src={breed?.breedImage}
                    className="rounded-full h-[60px] aspect-square"
                    width={60}
                    height={60}
                    alt={breed?.breedName}
                />
                <p>{breed?.breedName}</p>
            </div>
        </Link>
    );
};

export default BreedItem;
