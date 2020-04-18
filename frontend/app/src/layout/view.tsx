import React from 'react';

import CallieNavbar from '../components/navbar/Navbar';
import BlogSection from '../components/sections/BlogPage';
import CallieFooter from '../components/footer/Footer';
//import CallieNavbar from '../components/Navbar/CallieNavbar';
//import CallieNavbar from './components/navbar/Navbar';
//import CallieNavbar from '../components/Navbar/CallieNavbar2';

const Callie: React.FC<{}> = () => {

  //<Header />
  return (
    <>
      <CallieNavbar />
      <BlogSection />
      <CallieFooter />
    </>
  );
};

export default Callie;
