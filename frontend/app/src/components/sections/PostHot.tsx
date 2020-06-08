import React from 'react';

import { BlogIndexDataAPI } from '../../types/BlogIndexAPI';

export interface PostHotProps  {
  post: BlogIndexDataAPI;
}

const PostHot: React.FC<PostHotProps> = ({post}: PostHotProps) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const postDate = new Date(post.date);
  const postDateString = postDate.getDate()+1 + " " + month[postDate.getMonth()] + " " + postDate.getFullYear();

  const postURL = "/blog/" + post.id;
  const postCategories = <div className="post-category">{post.categories.map((category, key) => <a key={key}> {category}</a>)}</div>;

  return (
    <>
      {/* Post */}
			<div className="post post-thumb" style={{marginBottom: "0px"}}>
        <a className="post-img" href={postURL}><img src={"http://localhost:9090"+post.header_image.url} alt="" /></a>
				<div className="post-body">
          {postCategories}
					<h3 className="post-title title-lg"><a href={postURL}>{post.title}</a></h3>
					<ul className="post-meta">
            {/* check if author exists */
             post.author && <li><a href="author.html">{post.author.username}</a></li>
            }
						<li>{postDateString}</li>
					</ul>
				</div>
			</div>
    </>
  );
}

export default PostHot;
