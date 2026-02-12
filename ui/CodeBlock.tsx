'use client';

import { useState } from 'react';
import { Button } from '@components/button';

interface CodeBlockProps {
  children?: string;
  code?: string;
  language?: 'bash' | 'tsx' | 'html' | 'css' | 'json' | 'yaml' | 'text';
  filename?: string;
}

export function CodeBlock({ children, code, language = 'text', filename }: CodeBlockProps) {
  const content = code ?? children ?? '';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground">{filename || language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          aria-label="코드 복사"
          className="h-6 text-xs"
        >
          {copied ? '복사됨' : '복사'}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className={`language-${language} font-mono`}>{content}</code>
      </pre>
    </div>
  );
}
