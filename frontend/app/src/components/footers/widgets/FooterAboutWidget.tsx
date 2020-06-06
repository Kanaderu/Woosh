import React from 'react';

import SocialAPI, { platformToFontAwesome, platformToSocialColor } from '../../../types/SocialAPI';
import useGetSocialSerivce from '../../../api/useGetSocialService';

import altLogo from '../../../assets/logo/logo-text-w.png';

export interface FooterAboutWidgetProps  {
  social?: SocialAPI[];
}

const FooterAboutWidget: React.FC<FooterAboutWidgetProps> = ({social}) => {
  if(!social) {
    const resultsSocial = useGetSocialSerivce();

    if(resultsSocial.status == "loaded"){
      social = resultsSocial.payload.items;
      // console.log('Social:', social);
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

  return (
    <>
      <div className="footer-widget">
        <div className="footer-logo">
          <a href="index.html" className="logo"><img src={altLogo} alt="" /></a>
        </div>
        <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
          {renderSocial}
      </div>
    </>
  );
}

export default FooterAboutWidget;
