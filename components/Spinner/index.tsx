import React, { forwardRef, HTMLAttributes } from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  color?: string;
}

const sizeStyles: Record<SpinnerSize, { width: string; height: string; borderWidth: string }> = {
  sm: { width: '16px', height: '16px', borderWidth: '2px' },
  md: { width: '24px', height: '24px', borderWidth: '3px' },
  lg: { width: '32px', height: '32px', borderWidth: '4px' },
};

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', color, style, ...props }, ref) => {
    const sizes = sizeStyles[size];

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        style={{
          display: 'inline-block',
          width: sizes.width,
          height: sizes.height,
          border: `${sizes.borderWidth} solid var(--color-secondary)`,
          borderTopColor: color || 'var(--color-primary)',
          borderRadius: 'var(--radius-full)',
          animation: 'spinner-spin 0.8s linear infinite',
          ...style,
        }}
        {...props}
      >
        <style>{`
          @keyframes spinner-spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
