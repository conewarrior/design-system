import React, { forwardRef, HTMLAttributes } from 'react';

export type AlertVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

const variantStyles: Record<AlertVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-bg-surface)',
    borderColor: 'var(--color-border)',
    color: 'var(--color-text-default)',
  },
  success: {
    background: 'var(--color-success-bg)',
    borderColor: 'var(--color-success)',
    color: 'var(--color-success-text)',
  },
  warning: {
    background: 'var(--color-warning-bg)',
    borderColor: 'var(--color-warning)',
    color: 'var(--color-warning-text)',
  },
  error: {
    background: 'var(--color-error-bg)',
    borderColor: 'var(--color-error)',
    color: 'var(--color-error-text)',
  },
  info: {
    background: 'var(--color-info-bg)',
    borderColor: 'var(--color-info)',
    color: 'var(--color-info-text)',
  },
};

const icons: Record<AlertVariant, string> = {
  default: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', title, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          padding: 'var(--spacing-3) var(--spacing-4)',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid',
          ...variantStyles[variant],
          ...style,
        }}
        {...props}
      >
        <span style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1 }}>
          {icons[variant]}
        </span>
        <div style={{ flex: 1 }}>
          {title && (
            <div
              style={{
                fontWeight: 'var(--font-weight-semibold)' as unknown as number,
                fontSize: 'var(--font-size-sm)',
                marginBottom: children ? 'var(--spacing-1)' : 0,
              }}
            >
              {title}
            </div>
          )}
          {children && (
            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.9 }}>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
