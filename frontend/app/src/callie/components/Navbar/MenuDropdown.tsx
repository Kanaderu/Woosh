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

const MenuDropdown: React.FC<{}> = () => {

  return (
    <>
      <NavItem className="has-dropdown">
        <a href="index.html">Home</a>
        <div className="dropdown">
          <div className="dropdown-body">
            <ul className="dropdown-list">
              <li><a href="category.html">Category page</a></li>
              <li><a href="blog-post.html">Post page</a></li>
              <li><a href="author.html">Author page</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contacts</a></li>
              <li><a href="blank.html">Regular</a></li>
            </ul>
          </div>
        </div>
      </NavItem>
    </>
  )
}

export default MenuDropdown;
