import React, { forwardRef, InputHTMLAttributes } from 'react';

export type InputSize = 'sm' | 'md';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  error?: boolean;
}

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: {
    padding: 'var(--spacing-2) var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
  },
  md: {
    padding: 'var(--spacing-3) var(--spacing-6)',
    fontSize: 'var(--font-size-base)',
  },
};

const baseStyles: React.CSSProperties = {
  display: 'block',
  width: '100%',
  background: 'var(--color-bg-surface)',
  color: 'var(--color-text-default)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  lineHeight: 'var(--line-height-normal)',
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
};

const disabledStyles: React.CSSProperties = {
  opacity: 0.5,
  cursor: 'not-allowed',
  background: 'var(--color-secondary)',
};

const errorStyles: React.CSSProperties = {
  borderColor: 'var(--color-destructive)',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = 'md', error = false, style, disabled, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[inputSize],
      ...(error ? errorStyles : {}),
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return (
      <input
        ref={ref}
        style={combinedStyles}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
