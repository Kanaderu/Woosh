import React from 'react';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { MenuItemType } from '../../types/MenuType';

export interface MenuDropdownProps  {
  title: MenuItemType;
  links: MenuItemType[];
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({title, links}) => {
  return (
    <>
      <NavItem className="has-dropdown">
        <NavLink href={title.url}>{title.title}</NavLink>
        <div className="dropdown">
          <div className="dropdown-body">
            <ul className="dropdown-list">
              {links.map((link) =>
                <li><NavLink href={link.url}>{link.title}</NavLink></li>)}
            </ul>
          </div>
        </div>
      </NavItem>
    </>
  )
}

export default MenuDropdown;
