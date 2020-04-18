import React from 'react';
import { Container } from 'reactstrap';

import logo from '../../assets/callie/img/logo.png';

const NavbarTop: React.FC<{}> = () => {
  return (
    <>
      <div id="nav-top">
        <Container>
          {/* social */}
          <ul className="nav-social">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
          {/* /social */}

          {/* logo */}
          <div className="nav-logo">
            <a href="index.html" className="logo"><img src={logo} alt="" /></a>
          </div>
          {/* /logo */}

          {/* search & aside toggle */}
          <div className="nav-btns">
            <button className="aside-btn"><i className="fas fa-bars"/></button>
            <button className="search-btn"><i className="fas fa-search"/></button>
            <div id="nav-search">
              <form>
                <input className="input" name="search" placeholder="Enter your search..." />
              </form>
              <button className="nav-close search-close">
                <span></span>
              </button>
            </div>
          </div>
          {/* /search & aside toggle */}
        </Container>
      </div>
    </>
  )
}

export default NavbarTop;
