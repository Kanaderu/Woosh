import React from 'react';
import { BodyAPI } from '../../types/BaseAPI';
import ClassCarousel from '../carousel/ClassCarousel';

export interface CarouselHeaderProps  {
  images: BodyAPI[]
}

const CarouselHeader: React.FC<CarouselHeaderProps> = ({images}) => {
  return (
    <>
      <ClassCarousel images={images} />
    </>
  );
}

export default CarouselHeader;
