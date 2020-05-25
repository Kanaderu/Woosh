import React from 'react';

import header from '../../assets/img/header-2.jpg';

import ClassCarousel from '../carousel/ClassCarousel';

import {
  Container,
  Row,
} from 'reactstrap';


const RegularHeader: React.FC<{}> = () => {
  return (
    <>
      <ClassCarousel />
    </>
  );
}

export default RegularHeader;
