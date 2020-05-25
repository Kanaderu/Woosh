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

const MenuDropdownMega: React.FC<{}> = () => {

  return (
    <>
    <NavItem className="has-dropdown megamenu">
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
            </div>
          </div>
        </div>
      </div>
    </NavItem>
    </>
  )
}


export default MenuDropdownMega;
