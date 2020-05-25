import React from 'react';

import widget2 from '../../assets/img/widget-2.jpg';
import widget3 from '../../assets/img/widget-3.jpg';
import widget4 from '../../assets/img/widget-4.jpg';
import widget5 from '../../assets/img/widget-5.jpg';

const PostWidget: React.FC<{}> = () => {
  return (
    <>
      {/* post widget */}
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Popular Posts</h2>
        </div>
        {/* post */}
        <div className="post post-widget">
          <a className="post-img" href="blog-post.html"><img src={widget3} alt="" /></a>
          <div className="post-body">
            <div className="post-category">
              <a href="category.html">Lifestyle</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
          </div>
        </div>
        {/* /post */}

        {/* post */}
        <div className="post post-widget">
          <a className="post-img" href="blog-post.html"><img src={widget2} alt="" /></a>
          <div className="post-body">
            <div className="post-category">
              <a href="category.html">Technology</a>
              <a href="category.html">Lifestyle</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
          </div>
        </div>
        {/* /post */}

        {/* post */}
        <div className="post post-widget">
          <a className="post-img" href="blog-post.html"><img src={widget4} alt="" /></a>
          <div className="post-body">
            <div className="post-category">
              <a href="category.html">Health</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
          </div>
        </div>
        {/* /post */}

        {/* post */}
        <div className="post post-widget">
          <a className="post-img" href="blog-post.html"><img src={widget5} alt="" /></a>
          <div className="post-body">
            <div className="post-category">
              <a href="category.html">Health</a>
              <a href="category.html">Lifestyle</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
          </div>
        </div>
        {/* /post */}
      </div>
      {/* /post widget */}
    </>
  );
}

export default PostWidget;
