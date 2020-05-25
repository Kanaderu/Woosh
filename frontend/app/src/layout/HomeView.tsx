import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

// import RegularHeader from '../components/headers/RegularHeader';
import CarouselHeader from '../components/headers/CarouselHeader';
import HomePage from '../pages/HomePage';

const HomeView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <CarouselHeader />
      </CallieNavbar>
      <HomePage />
      <CallieFooter />
    </>
  );
};

export default HomeView;
