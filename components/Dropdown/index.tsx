'use client';

import React, { forwardRef, HTMLAttributes, useState, useRef, useEffect } from 'react';

// Dropdown Root
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'relative',
          display: 'inline-block',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

// DropdownTrigger
export interface DropdownTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ style, children, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          cursor: 'pointer',
          ...style,
        }}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

// DropdownMenu
export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  align?: 'start' | 'center' | 'end';
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ open, onClose, align = 'start', style, children, ...props }, ref) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          onClose();
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open, onClose]);

    if (!open) return null;

    const alignStyles: Record<string, React.CSSProperties> = {
      start: { left: 0 },
      center: { left: '50%', transform: 'translateX(-50%)' },
      end: { right: 0 },
    };

    return (
      <div
        ref={menuRef}
        style={{
          position: 'absolute',
          top: '100%',
          marginTop: 'var(--spacing-1)',
          minWidth: '160px',
          background: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 'var(--z-index-dropdown)' as unknown as number,
          padding: 'var(--spacing-1)',
          ...alignStyles[align],
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';

// DropdownItem
export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ disabled, style, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          padding: 'var(--spacing-2) var(--spacing-3)',
          background: 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--font-size-sm)',
          color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-default)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: 'background 0.15s ease',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            (e.target as HTMLButtonElement).style.background = 'var(--color-bg-surface-hover)';
          }
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.background = 'transparent';
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

// DropdownSeparator
export const DropdownSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: '1px',
          background: 'var(--color-border)',
          margin: 'var(--spacing-1) 0',
          ...style,
        }}
        {...props}
      />
    );
  }
);

DropdownSeparator.displayName = 'DropdownSeparator';
