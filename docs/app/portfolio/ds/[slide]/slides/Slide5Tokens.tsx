export function Slide5Tokens() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Distribution Flow */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Token Distribution</p>
          <h2 className="slide-section-title">토큰 배포와 동기화</h2>
        </div>

        <div className="slide-flow">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>tokens.css 수정</h4>
              <p>중앙 저장소에서 토큰 값 변경</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>git push (main)</h4>
              <p>변경사항 커밋 및 푸시</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>jsDelivr CDN 배포</h4>
              <p>push 즉시 CDN에 반영</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>모든 프로젝트 자동 업데이트</h4>
              <p>CDN 참조 시 즉시 반영, npm은 Dependabot 통해 업데이트</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>CDN vs npm</h4>
          <table className="slide-table" style={{ fontSize: '13px' }}>
            <thead>
              <tr>
                <th>방식</th>
                <th>반영</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CDN</td>
                <td>즉시</td>
                <td>토큰 (tokens.css)</td>
              </tr>
              <tr>
                <td>npm</td>
                <td>버전</td>
                <td>컴포넌트, 규칙</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right - Safety Guard */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Symlink 동기화 + Safety Guard</h3>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>문서 사이트 동기화</h4>
          <div className="slide-diagram" style={{ fontSize: '12px' }}>{`design-system/
├── tokens.css (SSOT)
└── docs/
    └── styles/
        └── tokens.css → ../../tokens.css
                         (symlink)`}</div>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '8px' }}>
            Symlink로 단일 소스 유지 → docs 빌드 시 항상 최신 토큰 적용
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>토큰 보호 체계</h4>
          <div className="slide-cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="slide-card">
              <h4>CODEOWNERS</h4>
              <p>tokens.css 변경 시 관리자 리뷰 필수</p>
            </div>
            <div className="slide-card">
              <h4>CI Script</h4>
              <p>토큰 삭제 감지 시 경고 (token-change-check.yml)</p>
            </div>
            <div className="slide-card">
              <h4>Generation Protocol</h4>
              <p>하드코딩 색상/간격 사용 시 생성 거부</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
