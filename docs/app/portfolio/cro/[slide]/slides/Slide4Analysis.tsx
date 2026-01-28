export function Slide4Analysis() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Analysis Results */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Analysis Application</p>
          <h2 className="slide-section-title">분석 적용: 20기 랜딩페이지</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>분석 결과 (지피터스 AI스터디 20기)</h4>
          <table className="slide-table" style={{ fontSize: '13px' }}>
            <thead>
              <tr>
                <th>지표</th>
                <th>수치</th>
                <th>의미</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PV/UV</td>
                <td>3,805 / 1,566</td>
                <td>UV당 2.4회 방문 (관심도 높음)</td>
              </tr>
              <tr>
                <td>Click 이탈률</td>
                <td>77.2%</td>
                <td>개선 필요</td>
              </tr>
              <tr>
                <td>Average Fold</td>
                <td>879px</td>
                <td>첫 화면 노출 영역</td>
              </tr>
              <tr>
                <td>가격 섹션 도달</td>
                <td>~25%</td>
                <td>대부분 가격 확인 전 이탈</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>스크롤 도달률</h4>
          <div style={{ fontSize: '12px', fontFamily: 'monospace', lineHeight: 1.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '100px' }}>Hero (0~900px)</span>
              <div style={{ flex: 1, height: '16px', background: '#e5e5e5', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'var(--theme-primary)' }} />
              </div>
              <span>100%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '100px' }}>타겟 페르소나</span>
              <div style={{ flex: 1, height: '16px', background: '#e5e5e5', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--theme-primary)' }} />
              </div>
              <span>85%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '100px' }}>커리큘럼</span>
              <div style={{ flex: 1, height: '16px', background: '#e5e5e5', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '70%', height: '100%', background: 'var(--theme-primary)' }} />
              </div>
              <span>70%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '100px' }}>가격/후기</span>
              <div style={{ flex: 1, height: '16px', background: '#e5e5e5', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '25%', height: '100%', background: '#dc2626' }} />
              </div>
              <span style={{ color: '#dc2626', fontWeight: 600 }}>25% ← 문제</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Insights & Actions */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">핵심 인사이트 → 즉시 개선</h3>
        </div>

        <div className="slide-cards" style={{ gridTemplateColumns: '1fr', marginBottom: 'var(--spacing-3)' }}>
          <div className="slide-card">
            <h4>Hero에 가격 앵커</h4>
            <p>&quot;4,000명+ 멤버 | 26만원대~&quot; 추가</p>
          </div>
          <div className="slide-card">
            <h4>스티키 CTA 긴급성</h4>
            <p>&quot;슈퍼얼리버드 D-2 | 269,000원&quot;</p>
          </div>
          <div className="slide-card">
            <h4>사회적 증거</h4>
            <p>후기 한 줄 Hero 아래 추가</p>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Claude Code로 바로 적용</h4>
          <div className="slide-code" style={{ fontSize: '12px' }}>
            <span className="comment"># 요청</span>{'\n'}
            &quot;Hero 섹션에 &apos;4,000명+ 멤버 | 26만원대~&apos; 추가해줘&quot;{'\n\n'}
            <span className="comment"># 결과</span>{'\n'}
            → 코드 수정 → 즉시 배포
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-2)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '12px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
            핵심: 데이터 기반 인사이트 → 당일 적용 (개발팀 요청 불필요)
          </p>
        </div>
      </div>
    </div>
  );
}
