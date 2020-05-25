import React from 'react';

const FooterTagsWidget: React.FC<{}> = () => {
  return (
    <>
      <div className="footer-widget">
        <h3 className="footer-title">Tags</h3>
        <div className="tags-widget">
          <ul>
            <li><a href="#">Social</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Life</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Magazine</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Health</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterTagsWidget;
