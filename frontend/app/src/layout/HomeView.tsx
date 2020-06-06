import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import CarouselHeader from '../components/headers/CarouselHeader';
import HomePage from '../pages/HomePage';

import HomePageAPI from '../types/HomePageAPI';
import useGetHomePageService from '../api/useGetHomePageService';

const HomeView: React.FC<{}> = () => {
  var home: HomePageAPI[] = [];

  const resultsHome = useGetHomePageService();

  if(resultsHome.status == "loaded"){
    home = resultsHome.payload.items;
    // console.log('HomeView:', home);
  } else {
    // handle state while loading
  }

  return (
    <>
      <CallieNavbar>
        {home.length > 0 &&
          <CarouselHeader images={home[0].carousel_images} />
        }
      </CallieNavbar>
      <HomePage entry={home} />
      <CallieFooter />
    </>
  );
};

export default HomeView;
