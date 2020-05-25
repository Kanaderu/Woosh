import React from 'react';

import headerImg from '../../assets/img/header-2.jpg';

import {
  Container,
  Row,
  Col
} from 'reactstrap';


const BlogHeader: React.FC<{}> = () => {
  return (
    <>
  		<div className="page-header">
  			<div className="page-header-bg" style={{backgroundImage: "url(" + headerImg + ")"}} data-stellar-background-ratio="0.5"></div>
  			<Container>
  				<Row>
  					<div className="col-md-offset-1 col-md-10 text-center">
  						<h1 className="text-uppercase">Lifestyle</h1>
  					</div>
  				</Row>
  			</Container>
  		</div>
    </>
  );
}

export default BlogHeader;
