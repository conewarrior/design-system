'use client';

import { useState, useEffect } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistProps {
  title: string;
  items: ChecklistItem[];
  storageKey?: string;
}

export function Checklist({ title, items, storageKey }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // localStorage에서 상태 복원
  useEffect(() => {
    if (storageKey && typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setChecked(JSON.parse(saved));
      }
    }
  }, [storageKey]);

  const handleChange = (id: string) => {
    const newChecked = { ...checked, [id]: !checked[id] };
    setChecked(newChecked);

    // localStorage에 저장
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(newChecked));
    }
  };

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="checklist">
      <div className="checklist-header">
        <h3 className="checklist-title">{title}</h3>
        <span className="checklist-progress">
          {completedCount} / {items.length}
        </span>
      </div>
      <div className="checklist-items">
        {items.map((item) => (
          <label
            key={item.id}
            className="checklist-item"
            data-checked={checked[item.id] || false}
          >
            <input
              type="checkbox"
              checked={checked[item.id] || false}
              onChange={() => handleChange(item.id)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
