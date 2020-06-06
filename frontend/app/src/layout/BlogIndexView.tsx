import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import BlogIndexPage from '../pages/BlogIndexPage';

import { BlogIndexDataAPI } from '../types/BlogIndexAPI';
import useGetBlogIndexService from '../api/useGetBlogIndexService';

const BlogIndexView: React.FC<{}> = () => {
  var blogIndex: BlogIndexDataAPI[] = [];

  const resultsPosts = useGetBlogIndexService();

  if(resultsPosts.status == "loaded"){
    blogIndex = resultsPosts.payload.items;
  } else {
    // handle state while loading
  }

  return (
    <>
      <CallieNavbar />
      <BlogIndexPage posts={blogIndex} />
      <CallieFooter />
    </>
  );
};

export default BlogIndexView;
