import React, { forwardRef, HTMLAttributes } from 'react';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-secondary)',
    color: 'var(--color-secondary-foreground)',
  },
  primary: {
    background: 'var(--color-primary-bg)',
    color: 'var(--color-primary-text)',
  },
  secondary: {
    background: 'var(--color-secondary)',
    color: 'var(--color-secondary-foreground)',
  },
  success: {
    background: 'var(--color-success-bg)',
    color: 'var(--color-success-text)',
  },
  warning: {
    background: 'var(--color-warning-bg)',
    color: 'var(--color-warning-text)',
  },
  error: {
    background: 'var(--color-error-bg)',
    color: 'var(--color-error-text)',
  },
  info: {
    background: 'var(--color-info-bg)',
    color: 'var(--color-info-text)',
  },
};

const sizeStyles: Record<BadgeSize, React.CSSProperties> = {
  sm: {
    padding: 'var(--spacing-0-5) var(--spacing-1-5)',
    fontSize: 'var(--font-size-xs)',
  },
  md: {
    padding: 'var(--spacing-1) var(--spacing-2)',
    fontSize: 'var(--font-size-xs)',
  },
  lg: {
    padding: 'var(--spacing-1) var(--spacing-2-5)',
    fontSize: 'var(--font-size-sm)',
  },
};

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-full)',
  fontWeight: 'var(--font-weight-medium)' as unknown as number,
  lineHeight: 'var(--line-height-tight)',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', style, children, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    return (
      <span ref={ref} style={combinedStyles} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
