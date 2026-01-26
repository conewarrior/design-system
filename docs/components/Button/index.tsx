import React, { forwardRef, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-foreground)',
    border: 'none',
  },
  secondary: {
    background: 'var(--color-secondary)',
    color: 'var(--color-secondary-foreground)',
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-foreground)',
    border: '1px solid var(--color-border)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-foreground)',
    border: 'none',
  },
  destructive: {
    background: 'var(--color-destructive)',
    color: 'var(--color-destructive-foreground)',
    border: 'none',
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: 'var(--spacing-2) var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
  },
  md: {
    padding: 'var(--spacing-3) var(--spacing-6)',
    fontSize: 'var(--font-size-base)',
  },
  lg: {
    padding: 'var(--spacing-4) var(--spacing-8)',
    fontSize: 'var(--font-size-lg)',
  },
};

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--spacing-1)',
  borderRadius: 'var(--radius-md)',
  fontWeight: 'var(--font-weight-medium)' as unknown as number,
  lineHeight: 'var(--line-height-tight)',
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
};

const disabledStyles: React.CSSProperties = {
  opacity: 0.5,
  cursor: 'not-allowed',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', style, disabled, children, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return (
      <button ref={ref} style={combinedStyles} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
