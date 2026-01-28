import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, required, error, children }: FormFieldProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-1)',
      }}
    >
      <label
        style={{
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-foreground)',
        }}
      >
        {label}
        {required && (
          <span
            style={{
              marginLeft: 'var(--spacing-0-5)',
              color: 'var(--color-destructive)',
            }}
          >
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-destructive)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
