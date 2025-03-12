import { ReactNode } from 'react';
import cn from '@/lib/cn';

interface HeaderProps {
    className?: string;
    children?: ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
    return (
        <header className={cn('h-[50px] w-full bg-[#C4C4C4]', className)}>
            <div className="h-full md:mx-auto md:max-w-6xl">{children}</div>
        </header>
    );
};

export default Header;
