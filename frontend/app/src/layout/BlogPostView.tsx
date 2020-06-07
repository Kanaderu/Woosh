import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';
import BlogHeader from '../components/headers/BlogHeader';

import BlogPostPage from '../pages/BlogPostPage';

import { BlogPostAPI } from '../types/BlogPostAPI';
import useGetBlogPostService from '../api/useGetBlogPostService';

export interface BlogViewProps  {
  match: {
    params: {
      id: number
    }
  }
}

const BlogView: React.FC<BlogViewProps> = ({match}) => {
  var post: BlogPostAPI | null = null;
  const results = useGetBlogPostService(match.params.id);

  if(results.status == "loaded"){
    post = results.payload;
    // console.log(post);
  } else {
    // handle state while loading
    // console.log(results.status)
  }

  if(post != null) {
    return (
      <>
        <CallieNavbar>
          <BlogHeader post={post} />
        </CallieNavbar>
        <BlogPostPage post={post} />
        <CallieFooter />
      </>
    );
  } else {
    return (
      <></>
    );
  }
};

export default BlogView;
