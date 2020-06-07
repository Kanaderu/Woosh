import React from 'react';

import InfoAPI from '../../types/InfoAPI';
import useGetInfoService from '../../api/useGetInfoService';

export interface NewsletterWidgetProps  {
  info?: InfoAPI[];
}

const NewsletterWidget: React.FC<NewsletterWidgetProps> = ({info}) => {
  if(!info) {
    const resultsInfo = useGetInfoService();

    if(resultsInfo.status == "loaded"){
      info = resultsInfo.payload.items;
      // console.log('Info:', info);
    } else {
      // handle state while loading
    }
  }

  const renderInfo = info != undefined && info.length > 0 && info[0].newsletter_info;

  return (
    <>
      {/* newsletter widget */}
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Newsletter</h2>
        </div>
        <div className="newsletter-widget">
          <form>
            <p>{renderInfo}</p>
            <input className="input" placeholder="Enter Your Email" />
            <button className="primary-button">Subscribe</button>
          </form>
        </div>
      </div>
      {/* /newsletter widget */}
    </>
  );
}

export default NewsletterWidget;
