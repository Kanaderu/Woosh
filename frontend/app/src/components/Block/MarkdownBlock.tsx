import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './CodeBlock';

interface MarkdownBlockProps {
  value: string;
};

const MarkdownBlock: React.FC<MarkdownBlockProps> = (props) => {

  return (
    <>
      <div>
        <ReactMarkdown source={ props.value }
          renderers={{ code: CodeBlock }} />
      </div>
    </>
  )
};

MarkdownBlock.defaultProps = {

};

export default MarkdownBlock;
