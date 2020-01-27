import React from 'react';

const AdWidget: React.FC<{}> = () => {
  return (
    <>
      {/* ad widget */}
      <div className="aside-widget text-center">
        <a href="#" style={{display: "inline-block", margin: "auto"}}>
          <img className="img-responsive" src="./img/ad-3.jpg" alt="" />
        </a>
      </div>
      {/* /ad widget */}
    </>
  );
}

export default AdWidget;
