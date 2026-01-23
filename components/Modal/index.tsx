'use client';

import React, { forwardRef, HTMLAttributes, useEffect } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeStyles: Record<'sm' | 'md' | 'lg' | 'full', React.CSSProperties> = {
  sm: { maxWidth: '400px' },
  md: { maxWidth: '500px' },
  lg: { maxWidth: '700px' },
  full: { maxWidth: '90vw', maxHeight: '90vh' },
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, size = 'md', style, children, ...props }, ref) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      if (open) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 'var(--z-index-modal-backdrop)' as unknown as number,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--spacing-4)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={onClose}
        />
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: '100%',
            background: 'var(--color-bg-surface)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            zIndex: 'var(--z-index-modal)' as unknown as number,
            ...sizeStyles[size],
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

// Modal Header
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          padding: 'var(--spacing-4)',
          borderBottom: '1px solid var(--color-border)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

// Modal Title
export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        style={{
          margin: 0,
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)' as unknown as number,
          color: 'var(--color-text-default)',
          ...style,
        }}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

ModalTitle.displayName = 'ModalTitle';

// Modal Body
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          padding: 'var(--spacing-4)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalBody.displayName = 'ModalBody';

// Modal Footer
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          padding: 'var(--spacing-4)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 'var(--spacing-2)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';
