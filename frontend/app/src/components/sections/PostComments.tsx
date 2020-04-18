import React from 'react';

import avatar1 from '../../assets/img/avatar-1.jpg';
import avatar2 from '../../assets/img/avatar-2.jpg';
import avatar3 from '../../assets/img/avatar-3.jpg';

const PostComments: React.FC<{}> = () => {
  return (
    <>
      {/* post comments */}
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">3 Comments</h3>
        </div>
        <div className="post-comments">
          {/* comment */}
          <div className="media">
            <div className="media-left">
              <img className="media-object" src={avatar2} alt="" />
            </div>
            <div className="media-body">
              <div className="media-heading">
                <h4>John Doe</h4>
                <span className="time">5 min ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="reply">Reply</a>
              {/* comment */}
              <div className="media media-author">
                <div className="media-left">
                  <img className="media-object" src={avatar1} alt="" />
                </div>
                <div className="media-body">
                  <div className="media-heading">
                    <h4>John Doe</h4>
                    <span className="time">5 min ago</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="#" className="reply">Reply</a>
                </div>
              </div>
              {/* /comment */}
            </div>
          </div>
          {/* /comment */}

          {/* comment */}
          <div className="media">
            <div className="media-left">
              <img className="media-object" src={avatar3} alt="" />
            </div>
            <div className="media-body">
              <div className="media-heading">
                <h4>John Doe</h4>
                <span className="time">5 min ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="reply">Reply</a>
            </div>
          </div>
          {/* /comment */}
        </div>
      </div>
      {/* /post comments */}
    </>
  );
}

export default PostComments;
