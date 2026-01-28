export function Slide1Cover() {
  return (
    <div className="slide-inner slide-cover">
      {/* Left - Screenshot placeholder */}
      <div className="slide-cover-left">
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-muted)',
          fontSize: '14px'
        }}>
          CRO 분석 대시보드 스크린샷
        </div>
      </div>

      {/* Right - Content */}
      <div className="slide-cover-right">
        {/* Title Section */}
        <div>
          <p className="slide-label">2026 · CRO Experiment</p>
          <h1 className="slide-title">
            <span className="slide-title-accent">CRO Experiment:</span><br />
            비개발자의 랜딩페이지 운영 자동화
          </h1>
          <p className="slide-subtitle">
            개발자 없이 랜딩페이지 CRO(전환율 최적화) 운영하기<br />
            Claude Code로 직접 제작부터 데이터 분석 자동화까지
          </p>
        </div>

        {/* Timeline */}
        <div className="slide-timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>시작</h4>
              <p>Claude Code로 랜딩페이지 직접 제작/배포</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>정량 분석 자동화</h4>
              <p>2시간 수동 분석 → 2분 자동 보고서</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>분석 적용</h4>
              <p>20기 랜딩페이지 분석 → 데이터 기반 UI 개선</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>정성 데이터 수집</h4>
              <p>Exit Intent 팝업으로 "왜?"를 직접 물어보기</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>완성된 시스템</h4>
              <p>정량 + 정성 데이터 통합 분석 체계</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>회고</h4>
              <p>교훈과 향후 계획</p>
            </div>
          </div>
        </div>

        {/* Stats - Before/After */}
        <div className="slide-stats">
          <div className="stat-item">
            <h5>분석 시간</h5>
            <p>2시간 → 2분</p>
          </div>
          <div className="stat-item">
            <h5>이탈 원인 파악</h5>
            <p>추측 → 직접 수집</p>
          </div>
          <div className="stat-item">
            <h5>개선 적용</h5>
            <p>1-2주 → 당일</p>
          </div>
          <div className="stat-item">
            <h5>사용 도구</h5>
            <p>Claude Code, Beusable, Voiceform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
