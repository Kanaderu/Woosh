import React from 'react';
import { Container, NavItem, NavLink } from 'reactstrap';

import MenuDropdown from '../menus/MenuDropdown';
import MenuDropdownMega from '../menus/MenuDropdownMega';
import MenuDropdownList from '../menus/MenuDropdownList';

const NavbarBottom: React.FC<{}> = () => {
  return (
    <>
      <div id="nav-bottom">
        <Container>
          <div className="nav-menu">
            <MenuDropdown />
            <MenuDropdownMega />
            <MenuDropdownList />
            <NavItem>
              <NavLink href="#">Technology</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Health</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Travel</NavLink>
            </NavItem>
          </div>
        </Container>
      </div>
      </>
    )
}

export default NavbarBottom;
