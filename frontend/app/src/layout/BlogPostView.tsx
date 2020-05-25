import React from 'react';

import CallieFooter from '../components/footers/Footer';

import BlogPostPage from '../pages/BlogPostPage';

export interface BlogViewProps  {
  match: {
    params: {
      id: number
    }
  }
}

const BlogView: React.FC<BlogViewProps> = ({match}) => {

  return (
    <>
      <BlogPostPage id={match.params.id} />
      <CallieFooter />
    </>
  );
};

export default BlogView;
