import React from 'react';

/*
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/main.js"></script>
 */

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

export interface NavbarProps  {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
  return (
    <>
      <header id="header">
        <div id="nav">
          <NavbarTop />
          <NavbarBottom />
          { children }
        </div>
      </header>
    </>
  );
}

export default Navbar;
