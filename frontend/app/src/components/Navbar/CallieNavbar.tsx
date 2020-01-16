import React from 'react';

//import '../../assets/callie/css/MontserratCallie.css';
import '../../assets/callie/css/style.css';
//import '../../assets/callie/css/font-awesome.min.css';
import '../../assets/callie/css/bootstrap.min.css';

import logo from '../../assets/callie/img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

//<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:400,700" rel="stylesheet">
const CallieNavbar: React.FC<{}> = () => {
  return (
    <>
      {/* NAV */}
  		<div id="nav">
        {/* Top Nav */}
  			<div id="nav-top">
  				<div className="container">
            {/* social */}
  					<ul className="nav-social">
  						<li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size='lg'/></a></li>
  						<li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a></li>
  						<li><a href="#"><FontAwesomeIcon icon={['fab', 'google-plus']} size='lg'/></a></li>
  						<li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size='lg'/></a></li>
  					</ul>
            {/* /social */}

  					{/* logo */}
  					<div className="nav-logo">
  						<a href="index.html" className="logo"><img src={logo} alt="" /></a>
  					</div>
  					{/* /logo */}

            {/* search & aside toggle */}
  					<div className="nav-btns">
  						<button className="aside-btn"><FontAwesomeIcon icon="bars"/></button>
  						<button className="search-btn"><FontAwesomeIcon icon="search"/></button>
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
  				</div>
  			</div>
        {/* /Top Nav */}

        {/* Main Nav */}
  			<div id="nav-bottom">
  				<div className="container">
  					{/* Nav */}
  					<ul className="nav-menu">
  						<li className="has-dropdown">
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
  						</li>
  						<li className="has-dropdown megamenu">
  							<a href="#">Lifestyle</a>
  							<div className="dropdown tab-dropdown">
  								<div className="row">
  									<div className="col-md-2">
  										<ul className="tab-nav">
  											<li className="active"><a data-toggle="tab" href="#tab1">Lifestyle</a></li>
  											<li><a data-toggle="tab" href="#tab2">Fashion</a></li>
  											<li><a data-toggle="tab" href="#tab1">Health</a></li>
  											<li><a data-toggle="tab" href="#tab2">Travel</a></li>
  										</ul>
  									</div>
  									<div className="col-md-10">
  										<div className="dropdown-body tab-content">
              					{/* tab1 */}
  											<div id="tab1" className="tab-pane fade in active">
  												<div className="row">
                  					{/* post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-10.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Travel</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}

                            {/* post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-13.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Travel</a>
  																	<a href="category.html">Lifestyle</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}

                            {/* post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-12.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Lifestyle</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}
  												</div>
  											</div>
                        {/* /tab1 */}

                        {/* tab2 */}
  											<div id="tab2" className="tab-pane fade in">
  												<div className="row">
                            {/* /post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-5.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Lifestyle</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}

                            {/* post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-8.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Fashion</a>
  																	<a href="category.html">Lifestyle</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}

                            {/* post */}
  													<div className="col-md-4">
  														<div className="post post-sm">
  															<a className="post-img" href="blog-post.html"><img src="./img/post-9.jpg" alt="" /></a>
  															<div className="post-body">
  																<div className="post-category">
  																	<a href="category.html">Lifestyle</a>
  																</div>
  																<h3 className="post-title title-sm"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  																<ul className="post-meta">
  																	<li><a href="author.html">John Doe</a></li>
  																	<li>20 April 2018</li>
  																</ul>
  															</div>
  														</div>
  													</div>
                  					{/* /post */}
  												</div>
  											</div>
                        {/* /tab2 */}

                        {/* /tab3 tab4 .. */}
  										</div>
  									</div>
  								</div>
  							</div>
  						</li>
  						<li className="has-dropdown megamenu">
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
  						</li>
  						<li><a href="#">Technology</a></li>
  						<li><a href="#">Health</a></li>
  						<li><a href="#">Travel</a></li>
  					</ul>
            {/* /nav */}
  				</div>
  			</div>
        {/* /Main Nav */}
  		</div>
      {/* /NAV */}
    </>
  );
}

export default CallieNavbar;
