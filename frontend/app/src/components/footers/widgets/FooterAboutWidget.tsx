import React from 'react';

import SocialAPI, { platformToFontAwesome, platformToSocialColor } from '../../../types/SocialAPI';
import InfoAPI from '../../../types/InfoAPI';
import useGetSocialSerivce from '../../../api/useGetSocialService';
import useGetInfoService from '../../../api/useGetInfoService';

import { HomeMenu } from '../../../constants';

import altLogo from '../../../assets/logo/logo-text-w.png';

export interface FooterAboutWidgetProps  {
  social?: SocialAPI[];
  info?: InfoAPI[];
}

const FooterAboutWidget: React.FC<FooterAboutWidgetProps> = ({social, info}) => {
  if(!social) {
    const resultsSocial = useGetSocialSerivce();

    if(resultsSocial.status == "loaded"){
      social = resultsSocial.payload.items;
      // console.log('Social:', social);
    } else {
      // handle state while loading
    }
  }

  if(!info) {
    const resultsInfo = useGetInfoService();

    if(resultsInfo.status == "loaded"){
      info = resultsInfo.payload.items;
      // console.log('Info:', info);
    } else {
      // handle state while loading
    }
  }

  const renderSocial = social != undefined &&
    <ul className="contact-social">
    {
      social.map((entry, key) => {
        const icon = platformToFontAwesome(entry.platform);
        const color = platformToSocialColor(entry.platform);
        return <li key={key}><a href={entry.url} className={color}><i className={icon}></i></a></li>
    })}</ul>;

  const renderInfo = info != undefined && info.length > 0 && info[0].about_footer_info;

  return (
    <>
      <div className="footer-widget">
        <div className="footer-logo">
          <a href={HomeMenu.url} className="logo"><img src={altLogo} alt="" /></a>
        </div>
        <p>{renderInfo}</p>
          {renderSocial}
      </div>
    </>
  );
}

export default FooterAboutWidget;
