import React from 'react';

import avatar from '../../assets/img/avatar-1.jpg';

import {
  Container,
  Row,
} from 'reactstrap';


const AuthorHeader: React.FC<{}> = () => {
  return (
    <>
  		<div className="page-header">
        <Container>
  				<Row>
  					<div className="col-md-offset-1 col-md-10 text-center">
  						<div className="author">
  							<img className="author-img center-block" src={avatar} alt=""/>
  							<h1 className="text-uppercase">John Doe</h1>
  							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  							<ul className="author-social">
  								<li><a href="#"><i className="fab fa-facebook"></i></a></li>
  								<li><a href="#"><i className="fab fa-twitter"></i></a></li>
  								<li><a href="#"><i className="fab fa-google-plus"></i></a></li>
  								<li><a href="#"><i className="fab fa-instagram"></i></a></li>
  							</ul>
  						</div>
  					</div>
  				</Row>
  			</Container>
  		</div>
    </>
  );
}

export default AuthorHeader;
