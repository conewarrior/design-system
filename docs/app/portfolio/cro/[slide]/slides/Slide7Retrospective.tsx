export function Slide7Retrospective() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Results & Lessons */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Retrospective</p>
          <h2 className="slide-section-title">회고</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>프로젝트 성과</h4>
          <table className="slide-table" style={{ fontSize: '13px' }}>
            <thead>
              <tr>
                <th>지표</th>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>분석 시간</td>
                <td>2시간</td>
                <td style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>2분</td>
              </tr>
              <tr>
                <td>피드백 수집</td>
                <td>불가능</td>
                <td style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>자동</td>
              </tr>
              <tr>
                <td>개선 적용</td>
                <td>1-2주</td>
                <td style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>당일</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>교훈</h4>
          <div className="slide-cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="slide-card">
              <h4>AI 협업</h4>
              <p>도구 비교 요청 → 빠른 옵션 파악, 최종 선택은 내 상황에 맞게</p>
            </div>
            <div className="slide-card">
              <h4>문제 해결</h4>
              <p>현상만 말해도 원인 분석 + 해결책 제안</p>
            </div>
            <div className="slide-card">
              <h4>자동화</h4>
              <p>반복 작업 제거 → 분석에 집중</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Future Plans */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">향후 계획 & 다른 업무 적용</h3>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>향후 계획</h4>
          <div className="slide-flow">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-content">
                <h4>템플릿화</h4>
                <p>랜딩페이지 + Exit Intent 구조 재사용</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-content">
                <h4>A/B 테스트</h4>
                <p>개선안 효과 검증</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <div className="flow-content">
                <h4>팀 공유</h4>
                <p>분석 프로세스 문서화 → 팀 시스템화</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>다른 업무 적용</h4>
          <div className="slide-cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="slide-card">
              <h4>뉴스레터 구독</h4>
              <p>스크롤 일정% 이상 시 팝업</p>
            </div>
            <div className="slide-card">
              <h4>할인 쿠폰</h4>
              <p>특정 시간 체류 시 제공</p>
            </div>
            <div className="slide-card">
              <h4>채팅 상담</h4>
              <p>특정 섹션 도달 시 표시</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'var(--theme-primary)', margin: 0, fontWeight: 600 }}>
            Thank you!
          </p>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: '4px 0 0 0' }}>
            cto-workshop-fixed.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
}
