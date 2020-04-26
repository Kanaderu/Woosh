import React from 'react';

import MarkdownEntry from './content/MarkdownEntry';

import { BlogPostBodyAPI } from '../../types/BlogPostAPI';

const renderType = (entry:BlogPostBodyAPI, key:number) => {
  switch(entry.type){
    case 'markdown':
      return <MarkdownEntry key={key} data={entry.value} />
  }
}

export interface PostContentProps {
  data: BlogPostBodyAPI[]
}

const PostContent: React.FC<PostContentProps> = ({data}) => {

  return (
    <>
      {
        data.map((entry, key) => renderType(entry, key));
      }
    </>
  );
}

export default PostContent;
