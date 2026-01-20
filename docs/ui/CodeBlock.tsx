'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: 'bash' | 'tsx' | 'html' | 'css' | 'json' | 'text';
  filename?: string;
}

export function CodeBlock({ children, language = 'text', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      {(filename || true) && (
        <div className="code-block-header">
          <span className="code-block-filename">{filename || language}</span>
          <button
            className="code-block-copy"
            onClick={handleCopy}
            data-copied={copied}
            aria-label="코드 복사"
          >
            {copied ? '✓ 복사됨' : '복사'}
          </button>
        </div>
      )}
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
