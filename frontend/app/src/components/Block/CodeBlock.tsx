import React from "react";
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
//import PrismSyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { okaidia as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import '../../assets/css/prism.css';
import '../../assets/css/prism.js';

type CodeBlockProps = {
  readonly value: string,
  readonly language: string
};

class CodeBlock extends React.Component<CodeBlockProps> {

  public render() {
    const { language, value } = this.props;
    const codeTagProps: SyntaxHighlighterProps["codeTagProps"] = {
        className: "language-"+ language
    };
    return (
      <SyntaxHighlighter
        data-language={ language }
        language={ language }
        style={ style }
        showLineNumbers={ true }
        //codeTagProps={ codeTagProps }
      >
        { value }
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
