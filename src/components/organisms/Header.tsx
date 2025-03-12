import { ReactNode } from 'react';
import cn from '@/lib/cn';

interface HeaderProps {
    className?: string;
    children?: ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
    return <header className={cn('h-[50px] w-full bg-[#C4C4C4]', className)}>{children}</header>;
};

export default Header;
