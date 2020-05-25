import React from 'react';

const PostShare: React.FC<{}> = () => {
  return (
    <>
      {/* post share */}
      <div className="section-row">
        <div className="post-share">
          <a href="#" className="social-facebook"><i className="fab fa-facebook"></i><span>Share</span></a>
          <a href="#" className="social-twitter"><i className="fab fa-twitter"></i><span>Tweet</span></a>
          <a href="#" className="social-pinterest"><i className="fab fa-pinterest"></i><span>Pin</span></a>
          <a href="#" ><i className="fa fa-envelope"></i><span>Email</span></a>
        </div>
      </div>
      {/* /post share */}
    </>
  );
}

export default PostShare;
