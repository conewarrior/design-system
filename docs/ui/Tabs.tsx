'use client';

import { createContext, useContext, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabsContextValue {
  activeTab: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  children: ReactNode;
}

export function Tabs({ tabs, activeTab, onChange, children }: TabsProps) {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % tabs.length;
      onChange(tabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      onChange(tabs[prevIndex].id);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab }}>
      <div className="tabs">
        <div className="tabs-list" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              className="tab-trigger"
              data-active={activeTab === tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

interface TabPanelProps {
  id: string;
  children: ReactNode;
}

export function TabPanel({ id, children }: TabPanelProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabPanel must be used within Tabs');
  }

  if (context.activeTab !== id) {
    return null;
  }

  return (
    <div role="tabpanel" className="tab-panel" data-tab={id}>
      {children}
    </div>
  );
}
