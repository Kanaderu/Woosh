import React from 'react';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

import FooterBottom from './FooterBottom';
import FooterNewsletterWidget from './widgets/FooterNewsletterWidget';
import FooterTagsWidget from './widgets/FooterTagsWidget';
import FooterCategoryWidget from './widgets/FooterCategoryWidget';
import FooterAboutWidget from './widgets/FooterAboutWidget';

const Footer: React.FC<{}> = () => {
  return (
    <>
    	<footer id="footer">
        <Container>
    			<Row>
            <Col md="3">
              <FooterAboutWidget />
    				</Col>
    				<Col md="3">
              <FooterCategoryWidget />
            </Col>
    				<Col md="3">
              <FooterTagsWidget />
    				</Col>
    				<Col md="3">
              <FooterNewsletterWidget />
    				</Col>
    			</Row>

          <FooterBottom />
    		</Container>
    	</footer>
    </>
  );
}

export default Footer;
