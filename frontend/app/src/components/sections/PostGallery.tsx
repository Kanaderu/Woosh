import React from 'react';

import post3 from '../../assets/img/post-3.jpg';
import post5 from '../../assets/img/post-5.jpg';
import post9 from '../../assets/img/post-9.jpg';
import post7 from '../../assets/img/post-7.jpg';

import {
  Row
} from 'reactstrap';

const PostGallery: React.FC<{}> = () => {
  return (
    <>
			<Row>
        {/* post */}
				<div className="col-md-6">
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
				</div>
        {/* /post */}

        {/* post */}
				<div className="col-md-6">
					<div className="post">
						<a className="post-img" href="blog-post.html"><img src={post5} alt=""/></a>
						<div className="post-body">
							<div className="post-category">
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="post-title"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
							<ul className="post-meta">
								<li><a href="author.html">John Doe</a></li>
								<li>20 April 2018</li>
							</ul>
						</div>
					</div>
				</div>
        {/* /post */}

				<div className="clearfix visible-md visible-lg"></div>

        {/* post */}
				<div className="col-md-6">
					<div className="post">
						<a className="post-img" href="blog-post.html"><img src={post9} alt=""/></a>
						<div className="post-body">
							<div className="post-category">
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
							<ul className="post-meta">
								<li><a href="author.html">John Doe</a></li>
								<li>20 April 2018</li>
							</ul>
						</div>
					</div>
				</div>
        {/* /post */}

        {/* post */}
				<div className="col-md-6">
					<div className="post">
						<a className="post-img" href="blog-post.html"><img src={post7} alt=""/></a>
						<div className="post-body">
							<div className="post-category">
								<a href="category.html">Health</a>
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
							<ul className="post-meta">
								<li><a href="author.html">John Doe</a></li>
								<li>20 April 2018</li>
							</ul>
						</div>
					</div>
				</div>
        {/* /post */}
			</Row>
    </>
  );
}

export default PostGallery;
