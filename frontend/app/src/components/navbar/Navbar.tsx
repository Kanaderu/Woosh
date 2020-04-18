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

import '../../assets/callie/css/bootstrap.min.css';
//import '../../assets/callie/css/MontserratCallie.css';
//import '../../assets/callie/css/font-awesome.min.css';

import '../../assets/callie/css/style.css'
//import '../../../assets/callie/css/style.css';
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
      <header id="header">
        <div id="nav">
          <NavbarTop />
          <NavbarBottom />
        </div>

        {/* Page header */}
        <div id="post-header" className="page-header">
    			<div className="page-header-bg" style={{backgroundImage: `url('./img/header-1.jpg')`}} data-stellar-background-ratio="0.5"></div>
    			<div className="container">
    				<div className="row">
    					<div className="col-md-10">
    						<div className="post-category">
    							<a href="category.html">Lifestyle</a>
    						</div>
    						<h1>Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</h1>
    						<ul className="post-meta">
    							<li><a href="author.html">John Doe</a></li>
    							<li>20 April 2018</li>
    							<li><i className="fa fa-comments"></i> 3</li>
    							<li><i className="fa fa-eye"></i> 807</li>
    						</ul>
    					</div>
    				</div>
    			</div>
        </div>
      </header>
    </>
  );
}

export default CallieNavbar;
