import React from 'react';

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

import SocialAPI from '../../types/SocialAPI';

export interface NavbarProps  {
  social?: SocialAPI[];
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({children, social}) => {
  return (
    <>
      <header id="header">
        <div id="nav">
          <NavbarTop social={social} />
          <NavbarBottom />
          { children }
        </div>
      </header>
    </>
  );
}

export default Navbar;
