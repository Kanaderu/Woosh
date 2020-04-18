import React from 'react';

/*
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/main.js"></script>
 */

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
import BlogHeader from '../headers/BlogHeader';

const CallieNavbar: React.FC<{}> = () => {
  return (
    <>
      <header id="header">
        <div id="nav">
          <NavbarTop />
          <NavbarBottom />
          <BlogHeader />
        </div>
      </header>
    </>
  );
}

export default CallieNavbar;
