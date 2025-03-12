import cn from '@/lib/cn';

interface SkeletonGridProps {
    className?: string;
    count?: number;
}

const SkeletonGrid = ({ className = '', count = 50 }: SkeletonGridProps) => {
    return (
        <div className={cn('grid grid-cols-3 md:grid-cols-4 gap-4', className)}>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
            ))}
        </div>
    );
};

export default SkeletonGrid;
