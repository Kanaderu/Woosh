import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import AboutHeader from '../components/headers/AboutHeader';
import AboutPage from '../pages/AboutPage';

const BlogView: React.FC<{}> = () => {

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

export default BlogView;
