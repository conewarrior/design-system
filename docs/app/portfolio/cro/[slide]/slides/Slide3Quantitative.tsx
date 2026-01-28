export function Slide3Quantitative() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Problem & Solution */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Quantitative Analysis</p>
          <h2 className="slide-section-title">정량 분석 자동화</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: '#fef2f2', borderRadius: 'var(--radius-md)', border: '1px solid #fecaca' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#dc2626', margin: '0 0 8px 0' }}>문제</h4>
          <p style={{ fontSize: '12px', color: '#7f1d1d', margin: 0, lineHeight: 1.6 }}>
            Beusable 히트맵 분석에 매번 2시간 소요<br />
            로그인 → 리포트 이동 → 클릭 데이터 확인 → 스크롤 데이터 확인 → 섹션별 분석 → 개선안 도출 → 보고서 작성
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>해결: cro_analyzer 시스템</h4>
          <div className="slide-diagram" style={{ fontSize: '11px' }}>{`┌─────────────────────────────────────────┐
│              cro_analyzer               │
├─────────────────────────────────────────┤
│  Beusable     →    Landing      →  Groq │
│  Scraper           Analyzer       Report│
│ (자동 로그인,    (DOM 구조,    (AI 분석 │
│  PV/UV/클릭/      섹션/CTA     보고서   │
│  스크롤 수집)      추출)       자동생성)│
└─────────────────────────────────────────┘`}</div>

          <div className="slide-code" style={{ marginTop: 'var(--spacing-2)', fontSize: '12px' }}>
            <span className="comment"># 실행</span>{'\n'}
            python main.py{'\n'}
            <span className="comment"># → 전체 파이프라인 2분 내 완료</span>
          </div>
        </div>
      </div>

      {/* Right - Before/After & Result */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">결과</h3>
        </div>

        <div className="slide-comparison" style={{ marginBottom: 'var(--spacing-3)' }}>
          <div className="comparison-box before">
            <p className="comparison-label">Before</p>
            <ul style={{ fontSize: '12px', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
              <li>분석 시간: 2시간</li>
              <li>분석 품질: 컨디션에 따라 편차</li>
              <li>보고서 형식: 매번 다름</li>
            </ul>
          </div>

          <div className="comparison-box after">
            <p className="comparison-label">After</p>
            <ul style={{ fontSize: '12px', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
              <li>분석 시간: 2분</li>
              <li>분석 품질: 일관됨</li>
              <li>보고서 형식: 표준화</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>파일 구조</h4>
          <div className="slide-diagram" style={{ fontSize: '11px' }}>{`cro_analyzer/
├── main.py              # 오케스트레이터
├── beusable_scraper.py  # 뷰저블 자동 로그인/수집
├── landing_analyzer.py  # DOM 구조 분석
├── report_generator.py  # Groq AI 보고서 생성
└── email_sender.py      # 결과 이메일 발송`}</div>
        </div>
      </div>
    </div>
  );
}
