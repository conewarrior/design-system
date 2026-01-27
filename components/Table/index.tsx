import { ReactNode } from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
  align?: 'left' | 'center' | 'right';
  nowrap?: boolean;
}

interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T, index: number) => void;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 'var(--font-size-sm)',
      }}
    >
      <thead>
        <tr
          style={{
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          {columns.map((col) => (
            <th
              key={String(col.key)}
              style={{
                padding: 'var(--spacing-1-5) var(--spacing-2)',
                textAlign: col.align || 'left',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick?.(row, rowIndex)}
            style={{
              borderBottom: '1px solid var(--color-border)',
              cursor: onRowClick ? 'pointer' : 'default',
            }}
            onMouseEnter={(e) => {
              if (onRowClick) {
                e.currentTarget.style.background = 'var(--color-bg-surface-hover)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {columns.map((col) => (
              <td
                key={String(col.key)}
                style={{
                  padding: 'var(--spacing-1-5) var(--spacing-2)',
                  textAlign: col.align || 'left',
                  color: 'var(--color-foreground)',
                  whiteSpace: col.nowrap ? 'nowrap' : 'normal',
                }}
              >
                {row[col.key] as ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
