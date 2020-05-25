import React, { useState } from 'react';
import { BodyAPI } from '../../types/BaseAPI';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import altLogo from '../../../assets/img/logo-alt.png';
import img from '../../assets/img/media-1.jpg';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img6 from '../../assets/img/img6.jpg';
import vid from '../../assets/img/video.mp4';

// const items = [
//   {
//     id: 1,
//     src: img1,
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     id: 2,
//     src: img1,
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
// ];

export interface CallieCarouselProps  {
  images: BodyAPI[]
}

const CallieCarousel: React.FC<CallieCarouselProps> = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // convert images to items
  const items = images.map((image, key) => {
    return {
      id: key,
      src: image.value.url,
      altText: image.value.title,
      caption: image.value.title,
    }
  })

  const next = () => {
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) {
      return;
    }
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel-items"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img height="100%" width="100%" src={item.src} alt={item.altText} />
        // <video height="100%" width="100%">
        //     <source src={vid} type="video/mp4" />
        //     Sorry, your browser doesn't support embedded videos.
        // </video>
        <div className="text-center">
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.carousel-items {
              width: 100vw;
              height: 100vh;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default CallieCarousel;
