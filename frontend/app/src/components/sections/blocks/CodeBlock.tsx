import React, { useState, useEffect, useRef } from 'react'
import Prism from 'prismjs';

// list languages to highlight
import 'prismjs/components/prism-markup-templating';

import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-cmake.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-clike.min.js';
import 'prismjs/components/prism-django.min.js';
import 'prismjs/components/prism-docker.min.js';
import 'prismjs/components/prism-http.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/components/prism-git.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-jsonp.min.js';
import 'prismjs/components/prism-kotlin.min.js';
import 'prismjs/components/prism-latex.min.js';
import 'prismjs/components/prism-lisp.min.js';
import 'prismjs/components/prism-lua.min.js';
import 'prismjs/components/prism-makefile.min.js';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-markup.min.js';
import 'prismjs/components/prism-matlab.min.js';
import 'prismjs/components/prism-nginx.min.js';
import 'prismjs/components/prism-opencl.min.js';
import 'prismjs/components/prism-perl.min.js';
import 'prismjs/components/prism-php.min.js';
import 'prismjs/components/prism-prolog.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-rest.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-sql.min.js';
import 'prismjs/components/prism-tcl.min.js';
import 'prismjs/components/prism-toml.min.js';
import 'prismjs/components/prism-tsx.min.js';
import 'prismjs/components/prism-verilog.min.js';
import 'prismjs/components/prism-vhdl.min.js';
import 'prismjs/components/prism-vim.min.js';
import 'prismjs/components/prism-yaml.min.js';

// list plugins to enable
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';

import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';

import 'prismjs/plugins/show-language/prism-show-language.min.js';

import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/match-braces/prism-match-braces.min.js';

import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js';

//import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords';

export interface CodeBlockProps {
  language: string,
  value: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({language, value}) => {
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

export default CodeBlock;
