import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeEntry from './CodeEntry';

export interface MarkdownEntryProps {
  data: string
}

const MarkdownEntry: React.FC<MarkdownEntryProps> = ({data}) => {

  return (
    <>
      <ReactMarkdown
        source={data}
        renderers={{
            'code': CodeEntry
          }}
      />
    </>
  );
}

export default MarkdownEntry;
