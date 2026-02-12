import * as React from 'react';
import { cn } from '../lib/utils';

interface ContentBoxProps extends React.ComponentProps<'div'> {
  /**
   * 콘텐츠 타입에 따른 스타일 힌트
   * - code: 코드/다이어그램용 (monospace)
   * - prose: 일반 텍스트용
   */
  type?: 'code' | 'prose';
}

function ContentBox({
  className,
  type = 'code',
  children,
  ...props
}: ContentBoxProps) {
  return (
    <div
      data-slot="content-box"
      className={cn(
        'rounded-lg border border-border bg-muted/50 p-4 overflow-x-auto',
        type === 'code' && 'font-mono text-xs',
        type === 'prose' && 'text-sm',
        className
      )}
      {...props}
    >
      <pre className={cn('whitespace-pre', type === 'code' && 'leading-relaxed')}>
        {children}
      </pre>
    </div>
  );
}

export { ContentBox };
