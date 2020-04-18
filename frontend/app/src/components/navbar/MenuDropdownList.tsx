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

const MenuDropdownList: React.FC<{}> = () => {

  return (
    <>
      <NavItem className="has-dropdown megamenu">
        <a href="#">Fashion</a>
        <div className="dropdown">
          <div className="dropdown-body">
            <div className="row">
              <div className="col-md-3">
                <h4 className="dropdown-heading">Categories</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Health</a></li>
                  <li><a href="#">Travel</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="dropdown-heading">Lifestyle</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Health</a></li>
                </ul>
                <h4 className="dropdown-heading">Technology</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Travel</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="dropdown-heading">Fashion</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Technology</a></li>
                </ul>
                <h4 className="dropdown-heading">Travel</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Healtth</a></li>
                  <li><a href="#">Fashion</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="dropdown-heading">Health</h4>
                <ul className="dropdown-list">
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Health</a></li>
                  <li><a href="#">Travel</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </NavItem>
    </>
  )
}

export default MenuDropdownList;
