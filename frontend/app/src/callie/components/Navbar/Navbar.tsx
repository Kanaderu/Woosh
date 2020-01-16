import React from 'react';

import '../../../assets/callie/css/bootstrap.min.css';
//import '../../assets/callie/css/MontserratCallie.css';
//import '../../assets/callie/css/font-awesome.min.css';

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

import '../../../assets/callie/css/style.css';
//import '../../assets/callie/js/jquery.min.js'
//import '../../assets/callie/js/bootstrap.min.js'
//import '../../assets/callie/js/jquery.stellar.min.js'
//import '../../assets/callie/js/main.js'

/*
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/main.js"></script>
 */

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

//<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:400,700" rel="stylesheet">
const CallieNavbar: React.FC<{}> = () => {
  return (
    <>
      <div id="nav">
        <NavbarTop />
        <NavbarBottom />
      </div>
    </>
  );
}

export default CallieNavbar;
