'use client';

import React, { forwardRef, HTMLAttributes, useEffect, useState } from 'react';

export type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title?: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-bg-surface)',
    borderLeft: '4px solid var(--color-border)',
  },
  success: {
    background: 'var(--color-bg-surface)',
    borderLeft: '4px solid var(--color-success)',
  },
  warning: {
    background: 'var(--color-bg-surface)',
    borderLeft: '4px solid var(--color-warning)',
  },
  error: {
    background: 'var(--color-bg-surface)',
    borderLeft: '4px solid var(--color-error)',
  },
  info: {
    background: 'var(--color-bg-surface)',
    borderLeft: '4px solid var(--color-info)',
  },
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant = 'default', title, description, duration = 5000, onClose, style, children, ...props }, ref) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          setVisible(false);
          onClose?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        style={{
          padding: 'var(--spacing-3) var(--spacing-4)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          minWidth: '300px',
          maxWidth: '400px',
          ...variantStyles[variant],
          ...style,
        }}
        {...props}
      >
        {title && (
          <div
            style={{
              fontWeight: 'var(--font-weight-semibold)' as unknown as number,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-default)',
              marginBottom: description ? 'var(--spacing-1)' : 0,
            }}
          >
            {title}
          </div>
        )}
        {description && (
          <div
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {description}
          </div>
        )}
        {children}
        {onClose && (
          <button
            onClick={() => {
              setVisible(false);
              onClose();
            }}
            style={{
              position: 'absolute',
              top: 'var(--spacing-2)',
              right: 'var(--spacing-2)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--spacing-1)',
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
