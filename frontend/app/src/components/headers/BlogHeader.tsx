import React from 'react';

import headerImg from '../../assets/img/header-1.jpg';

const BlogHeader: React.FC<{}> = () => {
  return (
    <>
      {/* Page header */}
      <div id="post-header" className="page-header">
  			<div className="page-header-bg" style={{backgroundImage: "url(" + headerImg + ")"}} data-stellar-background-ratio="0.5"></div>
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
    </>
  );
}

export default BlogHeader;
