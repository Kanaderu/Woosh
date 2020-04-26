import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { InlineMath, BlockMath } from 'react-katex';

import 'katex/dist/katex.min.css';

import CodeBlock from './CodeBlock';

// markdown renderer
export const Markdown = (props: ReactMarkdown.ReactMarkdownProps) => {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      code: (props: {value: string, language: string}) => <CodeBlock value={props.value} language={props.language} />,
      blockquote: (props: any) =>
        <blockquote className="blockquote">
          {props.children}
          <footer className="blockquote-footer"></footer>
        </blockquote>,
      math: (props: {value: string}) => <BlockMath math={props.value} />,
      inlineMath: (props: {value: string}) => <InlineMath math={props.value} />
    }
  };
  return (
    <ReactMarkdown {...newProps} />
  );
};


export interface MarkdownBlockProps {
  data: string
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({data}) => {
  return (
    <>
      <Markdown
        source={data}
      />
    </>
  );
}

export default MarkdownBlock;
