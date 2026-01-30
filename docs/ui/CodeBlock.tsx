'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: 'bash' | 'tsx' | 'html' | 'css' | 'json' | 'yaml' | 'text';
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
    <div className="rounded-lg border border-border bg-muted overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
        <span className="text-xs font-mono text-muted-foreground">{filename || language}</span>
        <button
          className="text-xs px-2 py-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleCopy}
          aria-label="코드 복사"
        >
          {copied ? '복사됨' : '복사'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className={`language-${language} font-mono`}>{children}</code>
      </pre>
    </div>
  );
}
