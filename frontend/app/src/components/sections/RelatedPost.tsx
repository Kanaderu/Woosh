import React from 'react';

import post4 from '../../assets/img/post-4.jpg';
import post6 from '../../assets/img/post-6.jpg';
import post7 from '../../assets/img/post-7.jpg';

const RelatedPost: React.FC<{}> = () => {
  return (
    <>
      {/* /related post */}
      <div>
        <div className="section-title">
          <h3 className="title">Related Posts</h3>
        </div>
        <div className="row">
          {/* post */}
          <div className="col-md-4">
            <div className="post post-sm">
              <a className="post-img" href="blog-post.html"><img src={post4} alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">Health</a>
                </div>
                <h3 className="post-title title-sm"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">John Doe</a></li>
                  <li>20 April 2018</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /post */}

          {/* post */}
          <div className="col-md-4">
            <div className="post post-sm">
              <a className="post-img" href="blog-post.html"><img src={post6} alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">Fashion</a>
                  <a href="category.html">Lifestyle</a>
                </div>
                <h3 className="post-title title-sm"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">John Doe</a></li>
                  <li>20 April 2018</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /post */}

          {/* post */}
          <div className="col-md-4">
            <div className="post post-sm">
              <a className="post-img" href="blog-post.html"><img src={post7} alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">Health</a>
                  <a href="category.html">Lifestyle</a>
                </div>
                <h3 className="post-title title-sm"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">John Doe</a></li>
                  <li>20 April 2018</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /post */}
        </div>
      </div>
      {/* /related post */}
    </>
  );
}

export default RelatedPost;
