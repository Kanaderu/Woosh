import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import BlogHeader from '../components/headers/BlogHeader';
import BlogPage from '../pages/BlogPage';

const BlogView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <BlogHeader />
      </CallieNavbar>
      <BlogPage />
      <CallieFooter />
    </>
  );
};

export default BlogView;
