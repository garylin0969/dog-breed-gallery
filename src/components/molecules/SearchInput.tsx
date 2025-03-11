'use client';

import { IoIosSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import { useState } from 'react';
import cn from '@/lib/cn';

interface SearchInputProps {
    onSearch?: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onSearch?.(newValue);
    };

    const handleClearClick = () => {
        setInputValue('');
        onSearch?.('');
    };

    return (
        <div
            className={cn(
                'min-h-8 w-full grid grid-cols-[auto_1fr_auto] items-center',
                isFocused || inputValue ? 'bg-white' : 'bg-gray-200'
            )}
        >
            <button className="mx-2.5 cursor-pointer">
                <IoIosSearch className="text-2xl" />
            </button>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isFocused ? 'Input breed name to search' : 'Click to search'}
                className="focus:outline-none"
            />
            {inputValue && (
                <button className="mx-2.5 cursor-pointer" onClick={handleClearClick}>
                    <MdClear className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default SearchInput;
