import { Button } from '@design-geniefy/ui';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) {
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  };

  const getThisMonthStart = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
  };

  const getLastMonthRange = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      .toISOString()
      .split('T')[0];
    const end = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0];
    return { start, end };
  };

  const handleQuickButton = (type: 'today' | 'yesterday' | 'thisMonth' | 'lastMonth') => {
    const today = getToday();
    const yesterday = getYesterday();

    switch (type) {
      case 'today':
        onStartDateChange(today);
        onEndDateChange(today);
        break;
      case 'yesterday':
        onStartDateChange(yesterday);
        onEndDateChange(yesterday);
        break;
      case 'thisMonth':
        onStartDateChange(getThisMonthStart());
        onEndDateChange(today);
        break;
      case 'lastMonth': {
        const { start, end } = getLastMonthRange();
        onStartDateChange(start);
        onEndDateChange(end);
        break;
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        flexWrap: 'wrap',
      }}
    >
      <input
        type="date"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
        style={{
          padding: 'var(--spacing-1-5) var(--spacing-2)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-foreground)',
          background: 'var(--color-background)',
        }}
      />
      <span style={{ color: 'var(--color-muted)' }}>~</span>
      <input
        type="date"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
        style={{
          padding: 'var(--spacing-1-5) var(--spacing-2)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-foreground)',
          background: 'var(--color-background)',
        }}
      />
      <div style={{ display: 'flex', gap: 'var(--spacing-1)' }}>
        <Button variant="outline" size="sm" onClick={() => handleQuickButton('today')}>
          오늘
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleQuickButton('yesterday')}>
          어제
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleQuickButton('thisMonth')}>
          이번달
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleQuickButton('lastMonth')}>
          지난달
        </Button>
      </div>
    </div>
  );
}
