
import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkdownEntryProps {
  data: string
}

const MarkdownEntry: React.FC<MarkdownEntryProps> = ({data}) => {

  return (
    <>
      <ReactMarkdown source={data} />
    </>
  );
}

export default MarkdownEntry;
