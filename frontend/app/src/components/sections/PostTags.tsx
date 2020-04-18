import React from 'react';

const PostTags: React.FC<{}> = () => {
  return (
    <>
      {/* post tags */}
  		<div className="section-row">
  			<div className="post-tags">
  				<ul>
  					<li>TAGS:</li>&nbsp;
  					<li><a href="#">Social</a></li>&nbsp;
  					<li><a href="#">Lifestyle</a></li>&nbsp;
  					<li><a href="#">Fashion</a></li>&nbsp;
  					<li><a href="#">Health</a></li>&nbsp;
  				</ul>
  			</div>
  		</div>
      {/* /post tags */}
    </>
  );
}

export default PostTags;
