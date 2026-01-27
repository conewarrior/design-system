'use client';

import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '../../../../components/Modal';
import { Button } from '../../../../components/Button';

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  const [openLg, setOpenLg] = useState(false);

  return (
    <div>
      <h1 className="page-title">Modal</h1>
      <p className="page-description">
        오버레이 다이얼로그 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card">
          <Button onClick={() => setOpen(true)}>모달 열기</Button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader>
            <ModalTitle>모달 제목</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
              모달 내용이 여기에 표시됩니다. ESC 키를 누르거나 바깥을 클릭하면 닫힙니다.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)}>확인</Button>
          </ModalFooter>
        </Modal>
        <pre><code>{`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>모달 열기</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>
    <ModalTitle>모달 제목</ModalTitle>
  </ModalHeader>
  <ModalBody>
    <p>모달 내용</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>취소</Button>
    <Button onClick={() => setOpen(false)}>확인</Button>
  </ModalFooter>
</Modal>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <Button variant="outline" onClick={() => setOpenLg(true)}>Large 모달</Button>
        </div>
        <Modal open={openLg} onClose={() => setOpenLg(false)} size="lg">
          <ModalHeader>
            <ModalTitle>Large 모달</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
              더 넓은 콘텐츠를 표시할 때 사용합니다.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenLg(false)}>닫기</Button>
          </ModalFooter>
        </Modal>
        <pre><code>{`<Modal size="sm">...</Modal>
<Modal size="md">...</Modal>
<Modal size="lg">...</Modal>
<Modal size="full">...</Modal>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Props</h2>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg | full</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
