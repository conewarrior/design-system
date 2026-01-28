export function Slide6Components() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Why npm */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Component Distribution</p>
          <h2 className="slide-section-title">컴포넌트는 왜 npm으로 배포하는가</h2>
        </div>

        <div className="slide-flow">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>버전 고정 가능</h4>
              <p>Breaking Change 방지. 프로젝트별로 안정적인 버전 유지.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>의존성 해결</h4>
              <p>npm이 자동으로 의존성 관리. 충돌 방지.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>표준 생태계</h4>
              <p>모든 개발자가 익숙한 도구. 별도 학습 불필요.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: '#fef2f2', borderRadius: 'var(--radius-md)', border: '1px solid #fecaca' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#dc2626', margin: '0 0 8px 0' }}>버전 관리 없이 배포하면?</h4>
          <div style={{ fontSize: '12px', color: '#7f1d1d', lineHeight: 1.6 }}>
            Button v1 사용 중 → 중앙에서 Button v2 배포 (API 변경) → 모든 프로젝트 동시 장애
          </div>
        </div>
      </div>

      {/* Right - Semantic Versioning & Automation */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Semantic Versioning + 자동화</h3>
        </div>

        <div style={{ marginBottom: 'var(--spacing-4)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>버전 규칙</h4>
          <div className="slide-diagram">{`v1.2.3
│ │ │
│ │ └─ PATCH: 버그 수정
│ └─── MINOR: 기능 추가 (호환)
└───── MAJOR: Breaking Change`}</div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>자동화 파이프라인</h4>
          <table className="slide-table" style={{ fontSize: '13px' }}>
            <thead>
              <tr>
                <th>단계</th>
                <th>트리거</th>
                <th>결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>자동 배포</td>
                <td>components/ 변경</td>
                <td>npm publish</td>
              </tr>
              <tr>
                <td>자동 버전 업</td>
                <td>GitHub Actions</td>
                <td>npm version patch</td>
              </tr>
              <tr>
                <td>양방향 동기화</td>
                <td>PostToolUse Hook</td>
                <td>auto-contribute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-2)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '12px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
            소비자 → 중앙 (auto-contribute) / 중앙 → 소비자 (Dependabot)
          </p>
        </div>
      </div>
    </div>
  );
}
