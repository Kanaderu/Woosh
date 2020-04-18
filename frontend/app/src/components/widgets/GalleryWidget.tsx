import React from 'react';

import gallery1 from '../../assets/img/galery-1.jpg';
import gallery2 from '../../assets/img/galery-2.jpg';
import gallery3 from '../../assets/img/galery-3.jpg';
import gallery4 from '../../assets/img/galery-4.jpg';
import gallery5 from '../../assets/img/galery-5.jpg';
import gallery6 from '../../assets/img/galery-6.jpg';

const GalleryWidget: React.FC<{}> = () => {
  return (
    <>
      {/* gallery widget */}
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Instagram</h2>
        </div>
        <div className="galery-widget">
          <ul>
            <li><a href="#"><img src={gallery1} alt="" /></a></li>
            <li><a href="#"><img src={gallery2} alt="" /></a></li>
            <li><a href="#"><img src={gallery3} alt="" /></a></li>
            <li><a href="#"><img src={gallery4} alt="" /></a></li>
            <li><a href="#"><img src={gallery5} alt="" /></a></li>
            <li><a href="#"><img src={gallery6} alt="" /></a></li>
          </ul>
        </div>
      </div>
      {/* /gallery widget */}
    </>
  );
}

export default GalleryWidget;
