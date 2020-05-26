import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import CarouselHeader from '../components/headers/CarouselHeader';
import HomePage from '../pages/HomePage';

import HomePageAPI from '../types/HomePageAPI';
import SocialAPI from '../types/SocialAPI';
import useGetHomePageService from '../api/useGetHomePageService';
import useGetSocialSerivce from '../api/useGetSocialService';

const HomeView: React.FC<{}> = () => {
  var home: HomePageAPI[] = [];
  var social: SocialAPI[] = [];

  const resultsHome = useGetHomePageService();
  const resultsSocial = useGetSocialSerivce();

  if(resultsSocial.status == "loaded"){
    social = resultsSocial.payload.items;
    console.log('HomeView:', social);
  } else {
    // handle state while loading
  }

  if(resultsHome.status == "loaded"){
    home = resultsHome.payload.items;
    console.log('HomeView:', home);
  } else {
    // handle state while loading
  }

  return (
    <>
      <CallieNavbar social={social}>
        {home.length > 0 &&
          <CarouselHeader images={home[0].carousel_images} />
        }
      </CallieNavbar>
      <HomePage entry={home} social={social} />
      <CallieFooter />
    </>
  );
};

export default HomeView;
