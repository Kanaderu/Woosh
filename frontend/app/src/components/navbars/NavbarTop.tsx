import React from 'react';
import { Container } from 'reactstrap';

import SocialAPI from '../../types/SocialAPI';

import logo from '../../assets/img/logo.png';

export interface NavbarTopProps  {
  social?: SocialAPI[];
}

const NavbarTop: React.FC<NavbarTopProps> = ({social}) => {

  console.log('NavbarTop:', social)

  const renderSocial = social != undefined &&
    social.map((entry, key) => {
      console.log(entry.platform)
      var icon = "fas fa-envelope";
      switch(entry.platform){
        case "Facebook":
          icon = "fab fa-facebook";
          break;
        case "Google+":
          icon = "fab fa-google-plus";
          break;
        case "Twitter":
          icon = "fab fa-twitter";
          break;
        case "Instagram":
          icon = "fab fa-instagram";
          break;
        case "Snapchat":
          icon = "fab fa-snapchat";
          break;
        default:
        // case "Email":
          icon = "fab fa-envelope";
          break;

      }
      // const icon = "facebook"
      return <li key={key}><a href={entry.url}><i className={icon}></i></a></li>
    });

  return (
    <>
      <div id="nav-top">
        <Container>
          {/* social */}
          <ul className="nav-social">
            {renderSocial}
            {/*
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            */}
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
