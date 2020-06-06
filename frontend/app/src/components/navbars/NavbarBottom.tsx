import React from 'react';
import { Container, NavItem, NavLink } from 'reactstrap';

import MenuDropdown from '../menus/MenuDropdown';
import MenuDropdownMega from '../menus/MenuDropdownMega';
import MenuDropdownList from '../menus/MenuDropdownList';

import { HomeMenu, HomeMenuItems, BlogMenu, AboutMenu } from '../../constants';

const NavbarBottom: React.FC<{}> = () => {
  return (
    <>
      <div id="nav-bottom">
        <Container>
          <div className="nav-menu">
            {/*<MenuDropdown title={HomeMenu} links={HomeMenuItems} />
            <MenuDropdownMega />
            <MenuDropdownList />*/}
            <NavItem>
              <NavLink href={HomeMenu.url}>{HomeMenu.title}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={BlogMenu.url}>{BlogMenu.title}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={AboutMenu.url}>{AboutMenu.title}</NavLink>
            </NavItem>
          </div>
        </Container>
      </div>
      </>
    )
}

export default NavbarBottom;
