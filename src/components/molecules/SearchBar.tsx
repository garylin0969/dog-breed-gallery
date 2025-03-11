'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useState, KeyboardEvent } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import cn from '@/lib/cn';

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');

    const [inputValue, setInputValue] = useState(search || '');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    const handleClearClick = () => {
        setInputValue('');
    };

    const handleSearch = useCallback(() => {
        if (inputValue.trim()) {
            router.push(`/?search=${encodeURIComponent(inputValue.trim())}`);
        } else {
            router.push('/');
        }
    }, [inputValue, router]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div
            className={cn(
                'min-h-8 w-full grid grid-cols-[auto_1fr_auto] items-center',
                isFocused || inputValue ? 'bg-white' : 'bg-gray-200'
            )}
        >
            <button className="mx-2.5 cursor-pointer" onClick={handleSearch}>
                <IoIosSearch className="text-2xl" />
            </button>
            <input
                className="focus:outline-none"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder={isFocused ? 'Input breed name to search' : 'Click to search'}
            />
            {inputValue && (
                <button className="mx-2.5 cursor-pointer" onClick={handleClearClick}>
                    <MdClear className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
