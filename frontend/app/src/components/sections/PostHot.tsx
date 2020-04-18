import React from 'react';

import hotPost from '../../assets/img/hot-post-3.jpg';

const PostHot: React.FC<{}> = () => {
  return (
    <>
      {/* Post */}
			<div className="post post-thumb">
				<a className="post-img" href="blog-post.html"><img src={hotPost} alt="" /></a>
				<div className="post-body">
					<div className="post-category">
						<a href="category.html">Fashion</a>
						<a href="category.html">Lifestyle</a>
					</div>
					<h3 className="post-title title-lg"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
					<ul className="post-meta">
						<li><a href="author.html">John Doe</a></li>
						<li>20 April 2018</li>
					</ul>
				</div>
			</div>
    </>
  );
}

export default PostHot;
