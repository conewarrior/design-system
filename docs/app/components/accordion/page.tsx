'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../../components/Accordion';

export default function AccordionPage() {
  return (
    <div>
      <h1 className="page-title">Accordion</h1>
      <p className="page-description">
        접이식 콘텐츠를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Single (Default)</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <Accordion type="single" defaultValue={['item-1']}>
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">섹션 1</AccordionTrigger>
              <AccordionContent value="item-1">
                첫 번째 섹션의 내용입니다. 한 번에 하나의 섹션만 열립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">섹션 2</AccordionTrigger>
              <AccordionContent value="item-2">
                두 번째 섹션의 내용입니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">섹션 3</AccordionTrigger>
              <AccordionContent value="item-3">
                세 번째 섹션의 내용입니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <pre><code>{`<Accordion type="single" defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">섹션 1</AccordionTrigger>
    <AccordionContent value="item-1">내용</AccordionContent>
  </AccordionItem>
</Accordion>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Multiple</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">여러 개 열기 1</AccordionTrigger>
              <AccordionContent value="item-1">
                여러 섹션을 동시에 열 수 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">여러 개 열기 2</AccordionTrigger>
              <AccordionContent value="item-2">
                이 섹션도 함께 열려있습니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <pre><code>{`<Accordion type="multiple">...</Accordion>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>type</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>single | multiple</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>single</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>defaultValue</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string[]</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>[]</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
