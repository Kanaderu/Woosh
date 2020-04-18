import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import BlogHeader from '../components/headers/BlogHeader';
import BlogPostPage from '../pages/BlogPostPage';

const BlogView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <BlogHeader />
      </CallieNavbar>
      <BlogPostPage />
      <CallieFooter />
    </>
  );
};

export default BlogView;
