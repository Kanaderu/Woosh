import React from 'react';

const CategoryWidget: React.FC<{}> = () => {
  return (
    <>
      {/* category widget */}
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Categories</h2>
        </div>
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
      {/* /category widget */}
    </>
  );
}

export default CategoryWidget;
