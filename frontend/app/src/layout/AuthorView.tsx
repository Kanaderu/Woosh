import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import AuthorHeader from '../components/headers/AuthorHeader';
import AuthorPage from '../pages/AuthorPage';

const BlogView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <AuthorHeader />
      </CallieNavbar>
      <AuthorPage />
      <CallieFooter />
    </>
  );
};

export default BlogView;
