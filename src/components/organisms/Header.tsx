'use client';

import { ReactNode } from 'react';

const Header = ({ children }: { children?: ReactNode }) => {
    return <header className="h-[50px] w-full bg-[#C4C4C4] px-2.5 py-[9px]">{children}</header>;
};

export default Header;
