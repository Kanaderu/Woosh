import React, { useState, useEffect, useRef } from 'react'
import Prism from 'prismjs';

// list languages to highlight
import 'prismjs/components/prism-markup-templating';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cmake';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-django';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsonp';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-latex';
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-makefile';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-matlab';
import 'prismjs/components/prism-opencl';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-prolog';
import 'prismjs/components/prism-rest';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-tcl';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-verilog';
import 'prismjs/components/prism-vhdl';
import 'prismjs/components/prism-vim';
import 'prismjs/components/prism-yaml';

// list plugins to enable
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar';

import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

import 'prismjs/plugins/show-language/prism-show-language';

import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/match-braces/prism-match-braces';

import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

//import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords';

export interface CodeEntryProps {
  language: string,
  value: string
}

const CodeEntry: React.FC<CodeEntryProps> = ({language, value}) => {
  const codeElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    Prism.highlightAll()
    // if (codeElement && codeElement.current) {
    //   Prism.highlightElement(codeElement.current)
    // }
  }, [value]);

  return (
    <div>
      <pre className="line-numbers">
        <code ref={codeElement} className={"match-braces " + `language-${language}`}>
          {value}
        </code>
      </pre>
    </div>
  )
}

export default CodeEntry;
