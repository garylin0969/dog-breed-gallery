'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState, KeyboardEvent, useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import cn from '@/lib/cn';

/**
 * SearchBar 組件
 *
 * 這是一個搜索欄組件，用於讓用戶搜索狗狗品種。
 * 它具有以下功能：
 * 1. 輸入搜索關鍵詞
 * 2. 點擊搜索按鈕或按 Enter 鍵進行搜索
 * 3. 清除搜索內容
 * 4. 根據焦點狀態改變外觀
 */
const SearchBar = () => {
    // 使用 Next.js 的路由功能，用於頁面導航
    const router = useRouter();
    // 獲取當前 URL 的查詢參數
    const searchParams = useSearchParams();
    // 從 URL 參數中獲取 search 值
    const search = searchParams.get('search');

    // 設置輸入框的值，初始值為 URL 中的 search 參數或空字符串
    const [inputValue, setInputValue] = useState(search || '');
    // 追蹤輸入框是否處於焦點狀態
    const [isFocused, setIsFocused] = useState(false);

    // 處理輸入變化的回調函數
    // 使用 useCallback 優化性能，避免不必要的重新渲染
    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    // 處理清除按鈕點擊的回調函數
    // 清除輸入內容並導航到首頁
    const handleClearClick = useCallback(() => {
        setInputValue('');
        router.push('/');
    }, [router]);

    // 處理搜索操作的回調函數
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

    // 處理鍵盤事件的回調函數
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
        // 搜索欄容器
        // 使用 cn 工具合併 className
        // 根據焦點狀態或輸入內容決定背景顏色
        <div
            className={cn(
                'min-h-8 w-full grid grid-cols-[auto_1fr_auto] items-center',
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
