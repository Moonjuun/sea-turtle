import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Button color="inherit">{children}</Button>
    </Link>
  );
};

export default NavLink;
