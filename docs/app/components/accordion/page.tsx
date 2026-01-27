'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../../components/Accordion';

export default function AccordionPage() {
  return (
    <div>
      <h1 className="page-title">Accordion</h1>
      <p className="page-description">
        접이식 콘텐츠를 표시하는 컴포넌트입니다. FAQ용 큰 사이즈(lg)와 필터용 작은 사이즈(sm) 두 가지 버전을 제공합니다.
      </p>

      <section>
        <h2 className="section-title">Large Size (FAQ용)</h2>
        <p className="section-description">
          FAQ, 도움말 등 큼지막한 콘텐츠에 적합한 크기입니다.
        </p>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <Accordion type="single" size="lg" defaultValue={['item-1']}>
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">Q. 제품을 어떻게 설치하나요?</AccordionTrigger>
              <AccordionContent value="item-1">
                npm install 명령어를 사용하여 간단하게 설치할 수 있습니다.
                자세한 내용은 설치 가이드를 참고해주세요.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">Q. 환불 정책은 어떻게 되나요?</AccordionTrigger>
              <AccordionContent value="item-2">
                구매 후 30일 이내에 전액 환불이 가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">Q. 기술 지원을 받을 수 있나요?</AccordionTrigger>
              <AccordionContent value="item-3">
                Pro 플랜 이상의 고객에게 우선 기술 지원을 제공합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <pre><code>{`<Accordion type="single" size="lg" defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">Q. 질문</AccordionTrigger>
    <AccordionContent value="item-1">답변 내용</AccordionContent>
  </AccordionItem>
</Accordion>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Small Size (필터용)</h2>
        <p className="section-description">
          카테고리 필터, 사이드바 등 작고 간결한 UI에 적합한 크기입니다.
        </p>
        <div style={{ maxWidth: '320px' }}>
          <Accordion
            type="multiple"
            size="sm"
            defaultValue={['category-1']}
            style={{ border: 'none', borderRadius: 0 }}
          >
            <AccordionItem value="category-1">
              <AccordionTrigger value="category-1">카테고리</AccordionTrigger>
              <AccordionContent value="category-1">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>의류</a>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>신발</a>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>악세사리</a>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand">
              <AccordionTrigger value="brand">브랜드</AccordionTrigger>
              <AccordionContent value="brand">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>나이키</a>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>아디다스</a>
                  <a href="#" style={{
                    padding: 'var(--spacing-1) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none'
                  }}>푸마</a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <pre><code>{`<Accordion
  type="multiple"
  size="sm"
  style={{ border: 'none', borderRadius: 0 }}
>
  <AccordionItem value="category-1">
    <AccordionTrigger value="category-1">카테고리</AccordionTrigger>
    <AccordionContent value="category-1">
      필터 옵션들...
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>lg</code></td>
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
