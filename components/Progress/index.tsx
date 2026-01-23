import React, { forwardRef, HTMLAttributes } from 'react';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  showLabel?: boolean;
}

const sizeStyles: Record<ProgressSize, React.CSSProperties> = {
  sm: { height: '4px' },
  md: { height: '8px' },
  lg: { height: '12px' },
};

const variantColors: Record<ProgressVariant, string> = {
  default: 'var(--color-primary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, size = 'md', variant = 'default', showLabel = false, style, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        style={{
          width: '100%',
          ...style,
        }}
        {...props}
      >
        {showLabel && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-1)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <span>Progress</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          style={{
            width: '100%',
            background: 'var(--color-secondary)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            ...sizeStyles[size],
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              background: variantColors[variant],
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
