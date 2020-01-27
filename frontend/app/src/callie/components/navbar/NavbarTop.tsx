import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../assets/callie/img/logo.png';

const NavbarTop: React.FC<{}> = () => {
  return (
    <>
      <div id="nav-top">
        <Container>
          {/* social */}
          <ul className="nav-social">
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size='lg'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'google-plus']} size='lg'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size='lg'/></a></li>
          </ul>
          {/* /social */}

          {/* logo */}
          <div className="nav-logo">
            <a href="index.html" className="logo"><img src={logo} alt="" /></a>
          </div>
          {/* /logo */}

          {/* search & aside toggle */}
          <div className="nav-btns">
            <button className="aside-btn"><FontAwesomeIcon icon="bars"/></button>
            <button className="search-btn"><FontAwesomeIcon icon="search"/></button>
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
