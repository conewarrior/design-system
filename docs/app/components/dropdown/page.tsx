'use client';

import { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator } from '../../../../components/Dropdown';
import { Button } from '../../../../components/Button';

export default function DropdownPage() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <h1 className="page-title">Dropdown</h1>
      <p className="page-description">
        클릭 시 메뉴를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card">
          <Dropdown>
            <DropdownTrigger onClick={() => setOpen(!open)} style={{ all: 'unset' }}>
              <Button variant="outline">메뉴 열기</Button>
            </DropdownTrigger>
            <DropdownMenu open={open} onClose={() => setOpen(false)}>
              <DropdownItem onClick={() => setOpen(false)}>프로필</DropdownItem>
              <DropdownItem onClick={() => setOpen(false)}>설정</DropdownItem>
              <DropdownSeparator />
              <DropdownItem onClick={() => setOpen(false)}>로그아웃</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <pre><code>{`const [open, setOpen] = useState(false);

<Dropdown>
  <DropdownTrigger onClick={() => setOpen(!open)}>
    <Button>메뉴 열기</Button>
  </DropdownTrigger>
  <DropdownMenu open={open} onClose={() => setOpen(false)}>
    <DropdownItem>프로필</DropdownItem>
    <DropdownItem>설정</DropdownItem>
    <DropdownSeparator />
    <DropdownItem>로그아웃</DropdownItem>
  </DropdownMenu>
</Dropdown>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Alignment</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <Dropdown>
            <DropdownTrigger onClick={() => setOpen2(!open2)} style={{ all: 'unset' }}>
              <Button variant="outline" size="sm">Right 정렬</Button>
            </DropdownTrigger>
            <DropdownMenu open={open2} onClose={() => setOpen2(false)} align="right">
              <DropdownItem onClick={() => setOpen2(false)}>옵션 1</DropdownItem>
              <DropdownItem onClick={() => setOpen2(false)}>옵션 2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <pre><code>{`<DropdownMenu align="start">...</DropdownMenu>
<DropdownMenu align="center">...</DropdownMenu>
<DropdownMenu align="right">...</DropdownMenu>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Props</h2>
        <h3 style={{ fontSize: 'var(--font-size-base)', marginTop: 'var(--spacing-4)' }}>DropdownMenu</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Prop</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Type</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>open</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>onClose</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>() =&gt; void</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>align</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>start | center | end</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>start</code></td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ fontSize: 'var(--font-size-base)', marginTop: 'var(--spacing-4)' }}>DropdownItem</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Prop</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Type</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>disabled</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
