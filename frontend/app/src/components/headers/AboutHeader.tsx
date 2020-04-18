import React from 'react';

import {
  Container,
  Row,
} from 'reactstrap';


const AboutHeader: React.FC<{}> = () => {
  return (
    <>
  		<div className="page-header">
        <Container>
          <Row>
  					<div className="col-md-offset-1 col-md-10 text-center">
  						<h1 className="text-uppercase">About Us</h1>
  						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  					</div>
  				</Row>
  			</Container>
  		</div>
    </>
  );
}

export default AboutHeader;
