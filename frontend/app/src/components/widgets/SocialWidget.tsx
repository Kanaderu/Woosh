import React from 'react';

import SocialAPI, { platformToFontAwesome, platformToSocialColor } from '../../types/SocialAPI';

export interface SocialWidgetProps  {
  social?: SocialAPI[];
}

const SocialWidget: React.FC<SocialWidgetProps> = ({social}) => {
  const renderSocial = social != undefined &&
    <ul>
    {
      social.map((entry, key) => {
        const icon = platformToFontAwesome(entry.platform);
        const color = platformToSocialColor(entry.platform);
        return (
          <li key={key}>
            <a href={entry.url} className={color}>
              <i className={icon}></i>
              <span>21.2K<br />Followers</span>
            </a>
          </li>
        )
      })
    }
    </ul>
  return (
    <>
      {/* social widget */}
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Social Media</h2>
        </div>
        <div className="social-widget">
          {renderSocial}
        </div>
      </div>
      {/* /social widget */}
    </>
  );
}

export default SocialWidget;
