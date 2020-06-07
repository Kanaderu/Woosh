import React from 'react';

import InfoAPI from '../../../types/InfoAPI';
import useGetInfoService from '../../../api/useGetInfoService';

export interface FooterNewsletterWidgetProps  {
  info?: InfoAPI[];
}

const FooterNewsletterWidget: React.FC<FooterNewsletterWidgetProps> = ({info}) => {

  if(!info) {
    const resultsInfo = useGetInfoService();

    if(resultsInfo.status == "loaded"){
      info = resultsInfo.payload.items;
      // console.log('Info:', info);
    } else {
      // handle state while loading
    }
  }

  const description = info != undefined && info.length > 0 && info[0].newsletter_info;

  return (
    <>
      <div className="footer-widget">
        <h3 className="footer-title">Newsletter</h3>
        <div className="newsletter-widget">
          <form>
            <p>{description}</p>
            <input className="input" name="newsletter" placeholder="Enter Your Email" />
            <button className="primary-button">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FooterNewsletterWidget;
