// 狗狗列表加載中
const LoadingBreedList = () => {
    return (
        <ul>
            {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="border-b-2 border-gray-200">
                    <div className="h-20 w-full flex items-center gap-5 px-5">
                        <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden bg-gray-200 animate-pulse" />
                        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded" />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default LoadingBreedList;
