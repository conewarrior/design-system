import { ReactNode } from 'react';

export interface InfoTableCell {
  label: string;
  value: ReactNode;
  colspan?: number;
  rowspan?: number;
}

interface InfoTableProps {
  rows: InfoTableCell[][];
}

export function InfoTable({ rows }: InfoTableProps) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 'var(--font-size-sm)',
        border: '1px solid var(--color-border)',
      }}
    >
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                colSpan={cell.colspan}
                rowSpan={cell.rowspan}
                style={{
                  padding: 'var(--spacing-2)',
                  border: '1px solid var(--color-border)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-1)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-muted)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {cell.label}
                  </span>
                  <span
                    style={{
                      color: 'var(--color-foreground)',
                    }}
                  >
                    {cell.value}
                  </span>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
