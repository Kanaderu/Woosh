import React from 'react';

import header from '../../assets/img/header-2.jpg';

import {
  Container,
  Row,
} from 'reactstrap';


const RegularHeader: React.FC<{}> = () => {
  return (
    <>
		<div className="page-header">
  			<div className="page-header-bg" style={{backgroundImage: "url(" + header + ")"}} data-stellar-background-ratio="0.5"></div>
  			<Container>
  				<Row>
  					<div className="col-md-offset-1 col-md-10 text-center">
  						<h1 className="text-uppercase">Regular Page</h1>
  						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  					</div>
  				</Row>
  			</Container>
      </div>
    </>
  );
}

export default RegularHeader;
