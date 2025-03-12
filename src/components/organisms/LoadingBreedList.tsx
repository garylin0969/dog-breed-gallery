const LoadingBreedList = () => {
    return (
        <ul>
            {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="border-b-2 border-gray-200">
                    <div className="min-h-20 w-full flex items-center gap-5 px-5">
                        <div className="rounded-full h-[60px] aspect-square bg-gray-200 animate-pulse" />
                        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded" />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default LoadingBreedList;
