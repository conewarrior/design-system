'use client';

import React, { forwardRef, HTMLAttributes, useState, createContext, useContext } from 'react';

// Context
interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  multiple: boolean;
  size: 'sm' | 'lg';
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion components must be used within Accordion');
  return context;
};

// Accordion Root
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  defaultValue?: string[];
  size?: 'sm' | 'lg';
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = 'single', defaultValue = [], size = 'lg', style, children, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultValue);

    const toggleItem = (value: string) => {
      if (type === 'single') {
        setOpenItems(openItems.includes(value) ? [] : [value]);
      } else {
        setOpenItems(
          openItems.includes(value)
            ? openItems.filter((item) => item !== value)
            : [...openItems, value]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem, multiple: type === 'multiple', size }}>
        <div
          ref={ref}
          style={{
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

// AccordionItem
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-value={value}
        style={{
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

AccordionItem.displayName = 'AccordionItem';

// AccordionTrigger
export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ value, style, children, ...props }, ref) => {
    const { openItems, toggleItem, size } = useAccordionContext();
    const isOpen = openItems.includes(value);

    const sizeStyles = {
      sm: {
        padding: 'var(--spacing-3) var(--spacing-4)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)' as unknown as number,
      },
      lg: {
        padding: 'var(--spacing-5) var(--spacing-6)',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)' as unknown as number,
      },
    };

    const iconSize = size === 'sm' ? 16 : 24;

    return (
      <button
        ref={ref}
        onClick={() => toggleItem(value)}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--color-bg-surface)',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-text-default)',
          textAlign: 'left',
          transition: 'background 0.15s ease',
          ...sizeStyles[size],
          ...style,
        }}
        {...props}
      >
        {children}
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
          }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

// AccordionContent
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ value, style, children, ...props }, ref) => {
    const { openItems, size } = useAccordionContext();
    const isOpen = openItems.includes(value);

    if (!isOpen) return null;

    const sizeStyles = {
      sm: {
        padding: 'var(--spacing-3) var(--spacing-4)',
        fontSize: 'var(--font-size-sm)',
      },
      lg: {
        padding: 'var(--spacing-5) var(--spacing-6)',
        fontSize: 'var(--font-size-base)',
      },
    };

    return (
      <div
        ref={ref}
        style={{
          color: 'var(--color-text-secondary)',
          background: 'var(--color-bg-surface)',
          ...sizeStyles[size],
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';
