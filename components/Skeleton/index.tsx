import React, { forwardRef, HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'text', width, height, style, ...props }, ref) => {
    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'circular':
          return {
            borderRadius: 'var(--radius-full)',
            width: width || '40px',
            height: height || '40px',
          };
        case 'rectangular':
          return {
            borderRadius: 'var(--radius-md)',
            width: width || '100%',
            height: height || '100px',
          };
        case 'text':
        default:
          return {
            borderRadius: 'var(--radius-sm)',
            width: width || '100%',
            height: height || '1em',
          };
      }
    };

    return (
      <div
        ref={ref}
        style={{
          background: 'linear-gradient(90deg, var(--color-secondary) 25%, var(--color-bg-surface-tertiary) 50%, var(--color-secondary) 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-loading 1.5s infinite',
          ...getVariantStyles(),
          ...style,
        }}
        {...props}
      >
        <style>{`
          @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';
