import React from 'react';

import prevPostImg from '../../assets/img/widget-8.jpg';
import nextPostImg from '../../assets/img/widget-10.jpg';

const PostNav: React.FC<{}> = () => {
  return (
    <>
      {/* post nav */}
  		<div className="section-row">
  			<div className="post-nav">
  				<div className="prev-post">
  					<a className="post-img" href="blog-post.html"><img src={prevPostImg} alt="" /></a>
  					<h3 className="post-title"><a href="#">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  					<span>Previous post</span>
  				</div>

  				<div className="next-post">
  					<a className="post-img" href="blog-post.html"><img src={nextPostImg} alt="" /></a>
  					<h3 className="post-title"><a href="#">Postea senserit id eos, vivendo periculis ei qui</a></h3>
  					<span>Next post</span>
  				</div>
  			</div>
  		</div>
      {/* /post nav */}
    </>
  );
}

export default PostNav;
