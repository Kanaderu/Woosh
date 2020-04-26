import React, { useState, useEffect, useRef } from 'react'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'

export interface CodeEntryProps {
  language: string,
  code: string
}

const CodeEntry: React.FC<CodeEntryProps> = ({language, code}) => {
  const codeElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeElement && codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  }, [code]);

  return (
    <div>
      <pre>
        <code ref={codeElement} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeEntry;
