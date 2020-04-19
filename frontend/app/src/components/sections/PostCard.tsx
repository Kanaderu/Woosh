import React from 'react';

import {
  Col
} from 'reactstrap';

import { BlogIndexDataAPI } from '../../types/BlogIndexAPI';

export interface PostCardProps  {
  post: BlogIndexDataAPI;
}

const PostCard: React.FC<PostCardProps> = ({post}: PostCardProps) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const postDate = new Date(post.date);
  const postDateString = postDate.getDate()+1 + " " + month[postDate.getMonth()] + " " + postDate.getFullYear();
  return (
    <>
			<Col md="4">
				<div className="post">
					<a className="post-img" href="blog-post.html"><img src={"http://localhost:9090"+post.header_image.url} alt=""/></a>
					<div className="post-body">
						<div className="post-category">
							<a href="category.html">Lifestyle</a>
						</div>
						<h3 className="post-title"><a href="blog-post.html">{post.title}</a></h3>
						<ul className="post-meta">
							<li><a href="author.html">{post.author}</a></li>
							<li>{postDateString}</li>
						</ul>
					</div>
				</div>
			</Col>
    </>
  );
}

export default PostCard;
