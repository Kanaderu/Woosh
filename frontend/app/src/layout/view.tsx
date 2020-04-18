import React from 'react';

import CallieNavbar from '../components/navbar/Navbar';
import BlogSection from '../components/sections/BlogPage';
import CallieFooter from '../components/footer/Footer';

const Callie: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar />
      <BlogSection />
      <CallieFooter />
    </>
  );
};

export default Callie;
