import React from 'react';
import { Container } from 'reactstrap';

import SocialAPI, { platformToFontAwesome } from '../../types/SocialAPI';
import useGetSocialSerivce from '../../api/useGetSocialService';

import { HomeMenu } from '../../constants';

import logo from '../../assets/logo/logo.png';

export interface NavbarTopProps  {
  social?: SocialAPI[];
}

const NavbarTop: React.FC<NavbarTopProps> = ({social}) => {
  if(!social) {
    const resultsSocial = useGetSocialSerivce();

    if(resultsSocial.status == "loaded"){
      social = resultsSocial.payload.items;
      // console.log('Social:', social);
    } else {
      // handle state while loading
    }
  }

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
            <a href={HomeMenu.url} className="logo"><img src={logo} alt="" /></a>
          </div>
          {/* /logo */}

          {/* search & aside toggle img*/}
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
