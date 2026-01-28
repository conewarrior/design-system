export function Slide7Quality() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Problem & design-rules.md */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Quality Control</p>
          <h2 className="slide-section-title">코드 품질은 왜 생성 단계에서 통제하는가</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>양방향 동기화의 위험</h4>
          <div className="slide-cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="slide-card">
              <h4>토큰 미사용</h4>
              <p>color: #333 → 브랜드 컬러 무시</p>
            </div>
            <div className="slide-card">
              <h4>중복 컴포넌트</h4>
              <p>Button 있는데 MyButton 생성</p>
            </div>
            <div className="slide-card">
              <h4>접근성 위반</h4>
              <p>aria-label 누락</p>
            </div>
            <div className="slide-card">
              <h4>반응형 미대응</h4>
              <p>모바일에서 깨지는 UI</p>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>design-rules.md</h4>
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '8px' }}>
            AI가 UI 생성 시 자동으로 참조하는 규칙 문서
          </p>
          <div className="slide-code" style={{ fontSize: '12px' }}>{`// UserPromptSubmit Hook
{
  "matcher": "UI|컴포넌트|버튼|카드",
  "command": "cat node_modules/.../design-rules.md"
}

// node_modules에서 직접 참조
// → npm 업데이트 시 규칙도 자동 갱신`}</div>
        </div>
      </div>

      {/* Right - Generation Protocol */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Generation Protocol 4단계</h3>
        </div>

        <div className="slide-flow">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>토큰 검사</h4>
              <p>CSS 변수만 사용했는가? ❌ color: #333 → ✅ var(--color-foreground)</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>중복 검사</h4>
              <p>@design-geniefy/ui에 있는 컴포넌트인가? ❌ 직접 구현 → ✅ import</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>접근성</h4>
              <p>aria-label, 키보드 지원 있는가?</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>반응형</h4>
              <p>모바일 대응 여부 확인</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--theme-primary)', margin: '0 0 8px 0' }}>검증 체크리스트</h4>
          <ul style={{ fontSize: '12px', color: 'var(--color-foreground)', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
            <li>하드코딩 색상 없음 (var(--color-*) 사용)</li>
            <li>하드코딩 간격 없음 (var(--spacing-*) 사용)</li>
            <li>radius는 토큰 사용 (var(--radius-*) 사용)</li>
            <li>컴포넌트 수 ≤ 7 (Miller&apos;s Law)</li>
            <li>@design-geniefy/ui 컴포넌트 우선 사용</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
