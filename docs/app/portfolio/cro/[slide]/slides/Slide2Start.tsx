export function Slide2Start() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Context & Process */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Start</p>
          <h2 className="slide-section-title">Claude Code로 직접 제작/배포</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>상황</h4>
          <p style={{ fontSize: '14px', color: 'var(--color-foreground)', margin: 0, lineHeight: 1.6 }}>
            CTO 워크샵 홍보용 랜딩페이지 필요
          </p>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>과정</h4>
          <div className="slide-flow">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-content">
                <h4>Claude Code에 요청</h4>
                <p>&quot;CTO 워크샵 랜딩페이지 만들어줘&quot;</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-content">
                <h4>Next.js 프로젝트 자동 생성</h4>
                <p>컴포넌트, 스타일, 반응형 레이아웃</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <div className="flow-content">
                <h4>Vercel 배포</h4>
                <p>git push → 자동 배포</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">4</div>
              <div className="flow-content">
                <h4>결과</h4>
                <p>반응형 랜딩페이지 완성 (하루)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-code" style={{ fontSize: '12px' }}>
          <span className="comment"># 결과물</span>{'\n'}
          https://cto-workshop-fixed.vercel.app
        </div>
      </div>

      {/* Right - Before/After */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Before / After</h3>
        </div>

        <div className="slide-comparison">
          <div className="comparison-box before">
            <p className="comparison-label">Before</p>
            <table className="slide-table" style={{ fontSize: '13px' }}>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>제작 방식</td>
                  <td>개발팀 요청</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>소요 시간</td>
                  <td>1-2주</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>커스터마이징</td>
                  <td>재요청 필요</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-box after">
            <p className="comparison-label">After</p>
            <table className="slide-table" style={{ fontSize: '13px' }}>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>제작 방식</td>
                  <td>Claude Code로 직접</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>소요 시간</td>
                  <td>하루</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-foreground)' }}>커스터마이징</td>
                  <td>즉시 수정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '13px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
            핵심: 개발팀 의존 제거 → 마케터가 직접 제작/수정
          </p>
        </div>
      </div>
    </div>
  );
}
