import React, { forwardRef, TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaSize?: TextareaSize;
  error?: boolean;
}

const sizeStyles: Record<TextareaSize, React.CSSProperties> = {
  sm: {
    padding: 'var(--spacing-1-5) var(--spacing-2)',
    fontSize: 'var(--font-size-sm)',
  },
  md: {
    padding: 'var(--spacing-2) var(--spacing-3)',
    fontSize: 'var(--font-size-base)',
  },
  lg: {
    padding: 'var(--spacing-2-5) var(--spacing-4)',
    fontSize: 'var(--font-size-lg)',
  },
};

const baseStyles: React.CSSProperties = {
  display: 'block',
  width: '100%',
  minHeight: '80px',
  background: 'var(--color-bg-surface)',
  color: 'var(--color-text-default)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  lineHeight: 'var(--line-height-normal)',
  outline: 'none',
  resize: 'vertical',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  fontFamily: 'inherit',
};

const disabledStyles: React.CSSProperties = {
  opacity: 0.5,
  cursor: 'not-allowed',
  background: 'var(--color-secondary)',
  resize: 'none',
};

const errorStyles: React.CSSProperties = {
  borderColor: 'var(--color-destructive)',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ textareaSize = 'md', error = false, style, disabled, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[textareaSize],
      ...(error ? errorStyles : {}),
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return <textarea ref={ref} style={combinedStyles} disabled={disabled} {...props} />;
  }
);

Textarea.displayName = 'Textarea';
