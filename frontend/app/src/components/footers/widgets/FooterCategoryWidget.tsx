import React from 'react';

const FooterCategoryWidget: React.FC<{}> = () => {
  return (
    <>
      <div className="footer-widget">
        <h3 className="footer-title">Categories</h3>
        <div className="category-widget">
          <ul>
            <li><a href="#">Lifestyle <span>451</span></a></li>
            <li><a href="#">Fashion <span>230</span></a></li>
            <li><a href="#">Technology <span>40</span></a></li>
            <li><a href="#">Travel <span>38</span></a></li>
            <li><a href="#">Health <span>24</span></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterCategoryWidget;
