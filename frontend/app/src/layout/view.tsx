import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';
import BlogSection from '../pages/BlogPage';

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
