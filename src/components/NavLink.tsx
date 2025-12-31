'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

const NavLink = ({ to, children, onClick, variant = 'desktop' }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  const baseClasses = "text-sm font-medium transition-colors";
  
  const classes = {
    desktop: `${baseClasses} ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`,
    mobile: `${baseClasses} px-3 py-2 rounded-md ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
  };

  return (
    <Link href={to} onClick={onClick} className={classes[variant]}>
      {children}
    </Link>
  );
};

export default NavLink;
