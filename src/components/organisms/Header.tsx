import { ReactNode } from 'react';
import cn from '@/lib/cn';

interface HeaderProps {
    className?: string;
    children?: ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
    return (
        <header
            className={cn(
                'sticky top-0 z-10 h-[50px] w-full bg-slate-900/70 font-serif shadow backdrop-blur-md',
                className
            )}
        >
            <div className="h-full md:mx-auto md:max-w-6xl">{children}</div>
        </header>
    );
};

export default Header;
