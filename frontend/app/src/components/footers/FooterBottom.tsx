import React from 'react';

import {
  Row
} from 'reactstrap';

const FooterBottom: React.FC<{}> = () => {
  return (
    <>
      <Row className="footer-bottom">
				<div className="col-md-6 col-md-push-6">
					<ul className="footer-nav">
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="contact.html">Contacts</a></li>
						<li><a href="#">Advertise</a></li>
						<li><a href="#">Privacy</a></li>
					</ul>
				</div>
				<div className="col-md-6 col-md-pull-6">
					<div className="footer-copyright">
            &copy; No Rights Reserved {(new Date().getFullYear())}
					</div>
				</div>
			</Row>
    </>
  );
}

export default FooterBottom;
