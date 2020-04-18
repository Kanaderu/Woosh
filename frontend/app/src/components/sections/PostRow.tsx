import React from 'react';

import post6 from '../../assets/img/post-6.jpg';
import post7 from '../../assets/img/post-7.jpg';
import post8 from '../../assets/img/post-8.jpg';
import post12 from '../../assets/img/post-12.jpg';
import post13 from '../../assets/img/post-13.jpg';

const PostRow: React.FC<{}> = () => {
  return (
    <>
      {/* post */}
  		<div className="post post-row">
  			<a className="post-img" href="blog-post.html"><img src={post13} alt=""/></a>
  			<div className="post-body">
  				<div className="post-category">
  					<a href="category.html">Travel</a>
  					<a href="category.html">Lifestyle</a>
  				</div>
  				<h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  				<ul className="post-meta">
  					<li><a href="author.html">John Doe</a></li>
  					<li>20 April 2018</li>
  				</ul>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
  			</div>
  		</div>
      {/* /post */}

      {/* post */}
  		<div className="post post-row">
  			<a className="post-img" href="blog-post.html"><img src={post6} alt=""/></a>
  			<div className="post-body">
  				<div className="post-category">
  					<a href="category.html">Fashion</a>
  					<a href="category.html">Lifestyle</a>
  				</div>
  				<h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  				<ul className="post-meta">
  					<li><a href="author.html">John Doe</a></li>
  					<li>20 April 2018</li>
  				</ul>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
  			</div>
  		</div>
      {/* /post */}

      {/* post */}
  		<div className="post post-row">
  			<a className="post-img" href="blog-post.html"><img src={post8} alt=""/></a>
  			<div className="post-body">
  				<div className="post-category">
  					<a href="category.html">Fashion</a>
  					<a href="category.html">Lifestyle</a>
  				</div>
  				<h3 className="post-title"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
  				<ul className="post-meta">
  					<li><a href="author.html">John Doe</a></li>
  					<li>20 April 2018</li>
  				</ul>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
  			</div>
  		</div>
      {/* /post */}

      {/* post */}
  		<div className="post post-row">
  			<a className="post-img" href="blog-post.html"><img src={post12} alt=""/></a>
  			<div className="post-body">
  				<div className="post-category">
  					<a href="category.html">Lifestyle</a>
  				</div>
  				<h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  				<ul className="post-meta">
  					<li><a href="author.html">John Doe</a></li>
  					<li>20 April 2018</li>
  				</ul>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
  			</div>
  		</div>
      {/* /post */}

      {/* post */}
  		<div className="post post-row">
  			<a className="post-img" href="blog-post.html"><img src={post7} alt=""/></a>
  			<div className="post-body">
  				<div className="post-category">
  					<a href="category.html">Health</a>
  					<a href="category.html">Lifestyle</a>
  				</div>
  				<h3 className="post-title"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
  				<ul className="post-meta">
  					<li><a href="author.html">John Doe</a></li>
  					<li>20 April 2018</li>
  				</ul>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
  			</div>
  		</div>
      {/* /post */}
    </>
  );
}

export default PostRow;
