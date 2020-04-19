import React from 'react';

import { BlogIndexDataAPI } from '../../types/BlogIndexAPI';

export interface PostHotProps  {
  post: BlogIndexDataAPI;
}

const PostHot: React.FC<PostHotProps> = ({post}: PostHotProps) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const postDate = new Date(post.date);
  const postDateString = postDate.getDate()+1 + " " + month[postDate.getMonth()] + " " + postDate.getFullYear();
  return (
    <>
      {/* Post */}
			<div className="post post-thumb" style={{marginBottom: "0px"}}>
				<a className="post-img" href="blog-post.html"><img src={"http://localhost:9090"+post.header_image.url} alt="" /></a>
				<div className="post-body">
					<div className="post-category">
						<a href="category.html">Fashion</a>
						<a href="category.html">Lifestyle</a>
					</div>
					<h3 className="post-title title-lg"><a href="blog-post.html">{post.title}</a></h3>
					<ul className="post-meta">
						<li><a href="author.html">{post.author}</a></li>
						<li>{postDateString}</li>
					</ul>
				</div>
			</div>
    </>
  );
}

export default PostHot;
