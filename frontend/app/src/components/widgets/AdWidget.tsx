import React from 'react';

import ad3 from '../../assets/img/ad-3.jpg';

const AdWidget: React.FC<{}> = () => {
  return (
    <>
      {/* ad widget */}
      <div className="aside-widget text-center">
        <a href="#" style={{display: "inline-block", margin: "auto"}}>
          <img className="img-responsive" src={ad3} alt="" />
        </a>
      </div>
      {/* /ad widget */}
    </>
  );
}

export default AdWidget;
