'use client';

import React, { forwardRef, HTMLAttributes, useState, createContext, useContext } from 'react';

// Context
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used within Tabs');
  return context;
};

// Tabs Root
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, onValueChange, style, children, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const handleChange = (value: string) => {
      setActiveTab(value);
      onValueChange?.(value);
    };

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab: handleChange }}>
        <div ref={ref} style={style} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

// TabsList
export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        style={{
          display: 'inline-flex',
          background: 'var(--color-secondary)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--spacing-0-5)',
          gap: 'var(--spacing-0-5)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

// TabsTrigger
export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, style, children, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === value;

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        onClick={() => setActiveTab(value)}
        style={{
          padding: 'var(--spacing-1-5) var(--spacing-3)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)' as unknown as number,
          background: isActive ? 'var(--color-bg-surface)' : 'transparent',
          color: isActive ? 'var(--color-text-default)' : 'var(--color-text-secondary)',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
          ...style,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

// TabsContent
export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, style, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();

    if (activeTab !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        style={{
          marginTop: 'var(--spacing-3)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';
