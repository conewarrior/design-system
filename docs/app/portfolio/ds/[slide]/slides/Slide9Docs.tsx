export function Slide9Docs() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Screenshot & Why */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Documentation</p>
          <h2 className="slide-section-title">이 모든 것을 담은 문서 사이트</h2>
        </div>

        <div style={{
          background: 'var(--theme-primary-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px'
        }}>
          <span style={{ color: 'var(--color-muted)', fontSize: '14px' }}>문서 사이트 스크린샷</span>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Why</h4>
          <ul style={{ fontSize: '13px', color: 'var(--color-foreground)', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
            <li>&quot;이게 뭔가요?&quot; 질문 제거</li>
            <li>설정 방법 표준화</li>
            <li>기술 선택 근거 문서화</li>
            <li>토큰 시각화</li>
            <li>버전 채택 현황 파악</li>
          </ul>
        </div>
      </div>

      {/* Right - Site Structure */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Site Structure (50+ pages)</h3>
        </div>

        <div className="slide-diagram" style={{ fontSize: '12px' }}>{`docs/
 │
 ├─ introduction (1p)
 │   └─ 왜 만들었는가
 │
 ├─ install/ (3p)
 │   ├─ guide
 │   ├─ how-it-works
 │   └─ cli-reference
 │
 ├─ tokens/ (20p)
 │   ├─ overview
 │   ├─ colors (시각화)
 │   ├─ spacing (시각화)
 │   ├─ typography
 │   ├─ radius
 │   └─ ... (semantic tokens)
 │
 ├─ rules/ (5p)
 │   ├─ constraints
 │   ├─ generation-protocol
 │   └─ accessibility
 │
 ├─ components/ (20p)
 │   ├─ Button, Input, Card...
 │   └─ 각 컴포넌트별:
 │       - Props 테이블
 │       - 사용 예시
 │       - 라이브 프리뷰
 │
 └─ status/ (3p)
     ├─ adoption (채택 현황)
     ├─ changelog
     └─ roadmap`}</div>
      </div>
    </div>
  );
}
