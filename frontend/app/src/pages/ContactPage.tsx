import React from 'react';

import Contact from '../components/sections/Contact';

import SocialWidget from '../components/widgets/SocialWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const AuthorPage: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>
        {/* Row */}
        <Row>
          <Col md="8">
            <Contact />
          </Col>

          <Col md="4">
            <SocialWidget />
            <NewsletterWidget />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default AuthorPage;
