export function Slide10Future() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Current Limitations */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Future</p>
          <h2 className="slide-section-title">현재 한계 & 향후 과제</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>아직 해결하지 못한 문제</h4>

          <div className="slide-cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="slide-card">
              <h4>Breaking Change 알림</h4>
              <p>컴포넌트 수정 시 다른 프로젝트 담당자가 인지하지 못할 수 있음</p>
              <ul style={{ fontSize: '12px', margin: '8px 0 0', paddingLeft: '16px', color: 'var(--color-muted)' }}>
                <li>Auto-merge ON: 모르는 사이에 변경</li>
                <li>Auto-merge OFF: GitHub 알림 설정 안 하면 PR 놓침</li>
              </ul>
            </div>

            <div className="slide-card">
              <h4>tokens.css vs npm 패키지</h4>
              <p>업데이트 반영 시점이 다름</p>
              <table className="slide-table" style={{ fontSize: '12px', marginTop: '8px' }}>
                <tbody>
                  <tr>
                    <td>tokens.css (CDN)</td>
                    <td>즉시 반영</td>
                  </tr>
                  <tr>
                    <td>components (npm)</td>
                    <td>PR 머지 후 반영</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="slide-card">
              <h4>버전 전략 복잡성</h4>
              <p>Semver 규칙 준수 + Breaking change 판단이 수동</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Future Plans */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">향후 확장 계획</h3>
        </div>

        <div className="slide-flow">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>Slack 알림 연동</h4>
              <p>#design-system 채널에 변경사항 자동 알림</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>Breaking Change 자동 감지</h4>
              <p>Props 변경, 삭제 시 자동으로 major 버전 범프</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>영향 범위 분석</h4>
              <p>컴포넌트 수정 시 어느 프로젝트에 영향 있는지 표시</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>Changelog 자동 생성</h4>
              <p>커밋 메시지 기반 릴리즈 노트 생성</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'var(--theme-primary)', margin: 0, fontWeight: 600 }}>
            Thank you!
          </p>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: '4px 0 0 0' }}>
            design.geniefy.ai
          </p>
        </div>
      </div>
    </div>
  );
}
