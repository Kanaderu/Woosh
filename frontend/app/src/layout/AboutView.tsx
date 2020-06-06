import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import AboutHeader from '../components/headers/AboutHeader';
import AboutPage from '../pages/AboutPage';

// import HomePageAPI from '../types/HomePageAPI';
// import useGetHomePageService from '../api/useGetHomePageService';

const AboutView: React.FC<{}> = () => {
  // var about: AboutPageAPI[] = [];

  // const resultsHome = useGetHomePageService();

  return (
    <>
      <CallieNavbar>
        <AboutHeader />
      </CallieNavbar>
      <AboutPage />
      <CallieFooter />
    </>
  );
};

export default AboutView;
