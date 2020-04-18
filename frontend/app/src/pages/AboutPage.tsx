import React from 'react';

import About from '../components/sections/About';

import {
  Container,
  Row
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
          <About />
        </Row>
      </Container>
    </div>
    </>
  );
}

export default AuthorPage;
