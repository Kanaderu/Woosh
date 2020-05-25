import React, { useState } from 'react';
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

const items = [
  {
    id: 1,
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    id: 4,
    src: img4,
    altText: 'Slide 4',
    caption: 'Slide 4',
    // header: 'Slide 4 Header',
  },
  {
    id: 5,
    src: img6,
    altText: 'Slide 5',
    caption: 'Slide 5',
    // header: 'Slide 4 Header',
  }
];

// const ClassCarousel = (props) => {
const ClassCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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
        className="custom-tag"
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
          `.custom-tag {
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

export default ClassCarousel;
