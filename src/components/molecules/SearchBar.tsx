'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState, KeyboardEvent, useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import cn from '@/lib/cn';

// 搜索欄
const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const [inputValue, setInputValue] = useState(search || '');
    const [isFocused, setIsFocused] = useState(false);

    // 使用 useCallback 優化性能，避免不必要的重新渲染
    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const handleClearClick = useCallback(() => {
        setInputValue('');
    }, []);

    // 如果有輸入內容，則導航到帶有搜索參數的 URL
    // 否則導航到首頁
    const handleSearch = useCallback(() => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            router.push(`/?search=${encodeURIComponent(trimmedValue)}`);
        } else {
            router.push('/');
        }
    }, [inputValue, router]);

    // 當用戶按下 Enter 鍵時觸發搜索
    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        },
        [handleSearch]
    );

    return (
        <div
            className={cn(
                'min-h-8 w-full grid grid-cols-[auto_1fr_auto] items-center rounded-2xl',
                isFocused || inputValue ? 'bg-white' : 'bg-gray-200'
            )}
        >
            {/* 搜索按鈕 */}
            <button className="mx-2.5 cursor-pointer" onClick={handleSearch} aria-label="Search">
                <IoIosSearch className="text-2xl" />
            </button>

            {/* 搜索輸入框 */}
            <input
                className="focus:outline-none"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)} // 獲得焦點時更新狀態
                onBlur={() => setIsFocused(false)} // 失去焦點時更新狀態
                onKeyDown={handleKeyDown}
                placeholder={isFocused ? 'Input breed name to search' : 'Click to search'} // 根據焦點狀態顯示不同的提示文字
                aria-label="Search for dog breeds" // 無障礙標籤
            />

            {/* 清除按鈕，僅在有輸入內容時顯示 */}
            {inputValue && (
                <button className="mx-2.5 cursor-pointer" onClick={handleClearClick} aria-label="Clear search">
                    <MdClear className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
