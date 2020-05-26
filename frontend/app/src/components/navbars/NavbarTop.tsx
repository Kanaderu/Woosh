import React from 'react';
import { Container } from 'reactstrap';

import SocialAPI, { platformToFontAwesome } from '../../types/SocialAPI';

import logo from '../../assets/img/logo.png';

export interface NavbarTopProps  {
  social?: SocialAPI[];
}

const NavbarTop: React.FC<NavbarTopProps> = ({social}) => {

  const renderSocial = social != undefined &&
    <ul className="nav-social">
    {
      social.map((entry, key) => {
        const icon = platformToFontAwesome(entry.platform);
        return <li key={key}><a href={entry.url}><i className={icon}></i></a></li>
    })}</ul>;

  return (
    <>
      <div id="nav-top">
        <Container>
          {/* social */}
          {renderSocial}
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
