import { ReactNode } from 'react';
import { Button } from '@design-geniefy/ui';

interface SearchFilterProps {
  children: ReactNode;
  onReset?: () => void;
  onSearch?: () => void;
}

export function SearchFilter({ children, onReset, onSearch }: SearchFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-3)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--spacing-2)',
          alignItems: 'flex-end',
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 'var(--spacing-2)',
        }}
      >
        {onReset && (
          <Button variant="outline" onClick={onReset}>
            초기화
          </Button>
        )}
        {onSearch && (
          <Button variant="primary" onClick={onSearch}>
            검색
          </Button>
        )}
      </div>
    </div>
  );
}
