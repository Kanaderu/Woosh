import React from 'react';

import CodeBlock from './blocks/CodeBlock';
import MarkdownBlock from './blocks/MarkdownBlock';

import { BlogPostBodyAPI } from '../../types/BlogPostAPI';

const renderType = (entry:BlogPostBodyAPI, key:number) => {
  switch(entry.type){
    case 'code':
      return <CodeBlock key={key} language={entry.value.language} value={entry.value.code} />
    case 'embedded_content':
      return <div key={key} dangerouslySetInnerHTML={{ __html: entry.value }} />
    case 'heading':
      return <h1 key={key}>{entry.value}</h1>
    case 'html':
      return <div key={key} dangerouslySetInnerHTML={{ __html: entry.value }} />
    case 'image':
      return <img key={key} src={"http://localhost:9090"+entry.value.url} alt={entry.value.title} />
    case 'markdown':
      return <MarkdownBlock key={key} data={entry.value} />
    case 'paragraph':
      return <div key={key}dangerouslySetInnerHTML={{ __html: entry.value }} />
    case 'quote':
      return (
        <blockquote key={key} className="blockquote">
          <p>{entry.value.quote}</p>
          <footer className="blockquote-footer">{entry.value.origin}</footer>
        </blockquote>
      )
  }
}

export interface PostContentProps {
  data: BlogPostBodyAPI[]
}

const PostContent: React.FC<PostContentProps> = ({data}) => {

  return (
    <>
      {
        data.map((entry, key) => renderType(entry, key))
      }
    </>
  );
}

export default PostContent;
