export function Slide6System() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - System Diagram */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Complete System</p>
          <h2 className="slide-section-title">완성된 시스템</h2>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>정량 + 정성 통합 분석 체계</h4>
          <div className="slide-diagram" style={{ fontSize: '11px' }}>{`┌─────────────────────────────────────────────┐
│            CRO Analysis System              │
├─────────────────────────────────────────────┤
│                                             │
│   정량 데이터              정성 데이터       │
│   ┌──────────┐           ┌──────────┐      │
│   │ Beusable │           │Voiceform │      │
│   │ 히트맵   │           │Exit Intent│     │
│   └────┬─────┘           └────┬─────┘      │
│        │                      │             │
│        └──────────┬───────────┘             │
│                   ▼                         │
│        ┌──────────────────┐                 │
│        │   cro_analyzer   │                 │
│        │ (자동 수집/분석)  │                 │
│        └────────┬─────────┘                 │
│                 ▼                           │
│        ┌──────────────────┐                 │
│        │ 데이터 기반 개선  │                 │
│        │  (Claude Code)   │                 │
│        └──────────────────┘                 │
│                                             │
└─────────────────────────────────────────────┘`}</div>
        </div>
      </div>

      {/* Right - Tools & Structure */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">사용 도구 & 파일 구조</h3>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>사용 도구</h4>
          <table className="slide-table" style={{ fontSize: '13px' }}>
            <thead>
              <tr>
                <th>도구</th>
                <th>역할</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Claude Code</td>
                <td>랜딩페이지 제작/수정, 자동화 코드 작성</td>
              </tr>
              <tr>
                <td>Beusable</td>
                <td>히트맵 (클릭, 스크롤, PV/UV)</td>
              </tr>
              <tr>
                <td>Voiceform</td>
                <td>음성/텍스트 피드백 수집</td>
              </tr>
              <tr>
                <td>cro_analyzer</td>
                <td>Playwright 스크래핑 + Groq AI 보고서</td>
              </tr>
            </tbody>
          </table>
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

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-2)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '12px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
            핵심: 개발자 없이 마케터가 직접 운영 가능한 CRO 시스템
          </p>
        </div>
      </div>
    </div>
  );
}
