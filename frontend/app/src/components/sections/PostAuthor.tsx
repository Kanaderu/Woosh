import React from 'react';

import avatar from '../../assets/img/avatar-1.jpg';

const PostAuthor: React.FC<{}> = () => {
  return (
    <>
      {/* post author */}
      <div className="section-row">
  			<div className="section-title">
  				<h3 className="title">About <a href="author.html">John Doe</a></h3>
  			</div>
  			<div className="author media">
  				<div className="media-left">
  					<a href="author.html">
  						<img className="author-img media-object" src={avatar} alt="" />
  					</a>
  				</div>
  				<div className="media-body">
  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  					<ul className="author-social">
  						<li><a href="#"><i className="fab fa-facebook"></i></a></li>
  						<li><a href="#"><i className="fab fa-twitter"></i></a></li>
  						<li><a href="#"><i className="fab fa-google-plus"></i></a></li>
  						<li><a href="#"><i className="fab fa-instagram"></i></a></li>
  					</ul>
  				</div>
  			</div>
  		</div>
      {/* /post content */}
    </>
  );
}

export default PostAuthor;
