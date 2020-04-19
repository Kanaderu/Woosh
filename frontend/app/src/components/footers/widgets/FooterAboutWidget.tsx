import React from 'react';

import altLogo from '../../../assets/img/logo-alt.png';

const FooterAboutWidget: React.FC<{}> = () => {
  return (
    <>
      <div className="footer-widget">
        <div className="footer-logo">
          <a href="index.html" className="logo"><img src={altLogo} alt="" /></a>
        </div>
        <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
        <ul className="contact-social">
          <li><a href="#" className="social-facebook"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" className="social-twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="social-google-plus"><i className="fab fa-google-plus"></i></a></li>
          <li><a href="#" className="social-instagram"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </>
  );
}

export default FooterAboutWidget;
