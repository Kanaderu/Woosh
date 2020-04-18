import React from 'react';

import Typography from '../components/sections/Typography';

import SocialWidget from '../components/widgets/SocialWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const RegularPage: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>
        {/* Row */}
        <Row>
          <Col md="8">
            <Typography />
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

export default RegularPage;
