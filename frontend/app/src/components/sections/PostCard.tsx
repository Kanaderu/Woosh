import React from 'react';

import post3 from '../../assets/img/post-3.jpg';

const PostCard: React.FC<{}> = () => {
  return (
    <>
      {/* post */}
				<div className="post">
					<a className="post-img" href="blog-post.html"><img src={post3} alt=""/></a>
					<div className="post-body">
						<div className="post-category">
							<a href="category.html">Lifestyle</a>
						</div>
						<h3 className="post-title"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
						<ul className="post-meta">
							<li><a href="author.html">John Doe</a></li>
							<li>20 April 2018</li>
						</ul>
					</div>
				</div>
      {/* /post */}
    </>
  );
}

export default PostCard;
