import React from 'react';

import { BlogPostAPI } from '../../types/BlogPostAPI';

export interface BlogHeaderProps {
  post: BlogPostAPI
}

const BlogHeader: React.FC<BlogHeaderProps> = ({post}) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const postDate = new Date(post.date);
  const postDateString = postDate.getDate()+1 + " " + month[postDate.getMonth()] + " " + postDate.getFullYear();

  const postCategories = <div className="post-category">{post.categories.map((category, key) => <a key={key}> {category}</a>)}</div>;

  return (
    <>
      <div id="post-header" className="page-header">
  			<div className="page-header-bg" style={{backgroundImage: "url(http://localhost:9090" + post.header_image.url + ")"}} data-stellar-background-ratio="0.5"></div>
  			<div className="container">
  				<div className="row">
  					<div className="col-md-10">
              {postCategories}
  						<h1>{post.title}</h1>
  						<ul className="post-meta">
  							<li><a href="author.html">{post.author.username}</a></li>
  							<li>{postDateString}</li>
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
