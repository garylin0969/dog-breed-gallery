'use client';

import SearchInput from '../molecules/SearchInput';

const Header = () => {
    const handleSearch = (value: string) => {
        // 这里可以处理搜索逻辑，例如触发API调用或更新全局状态
        console.log('Searching for:', value);
    };

    return (
        <header className="h-[50px] w-full bg-[#C4C4C4] px-2.5 py-[9px]">
            <SearchInput onSearch={handleSearch} />
        </header>
    );
};

export default Header;
