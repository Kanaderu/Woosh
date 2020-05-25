import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import BlogIndexPage from '../pages/BlogIndexPage';

import useGetBlogIndexService from '../api/useGetBlogIndexService';

const BlogView: React.FC<{}> = () => {

  const result = useGetBlogIndexService();
  console.log(result);

  return (
    <>
      <CallieNavbar />
      <BlogIndexPage />
      <CallieFooter />
    </>
  );
};

export default BlogView;
