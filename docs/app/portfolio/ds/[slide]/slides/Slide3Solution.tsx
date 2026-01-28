export function Slide3Solution() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Principles */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Solution</p>
          <h2 className="slide-section-title">중앙 집중형 토큰 + 컴포넌트 + 양방향 동기화</h2>
        </div>

        <div className="slide-flow">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>Single Source of Truth</h4>
              <p>모든 토큰/컴포넌트는 중앙 저장소에서 관리. 분산된 복사본 금지.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>Zero Config</h4>
              <p>/setup-design 한 번으로 모든 설정 완료. 수동 설정 단계 제거.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>Bi-directional Sync</h4>
              <p>중앙 → 프로젝트 (다운로드) / 프로젝트 → 중앙 (자동 기여)</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>Auto Sync</h4>
              <p>Dependabot + Auto-merge로 버전 업데이트 자동 적용.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Architecture Diagram */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Structure</h3>
        </div>

        <div className="slide-diagram">{`     ┌─────────────────────────────┐
     │     design-system (중앙)     │
     │  ┌─────────┬───────────────┐│
     │  │tokens.css│ components/   ││
     │  └────┬────┴───────┬───────┘│
     └───────┼───────────┼─────────┘
             │           │
        CDN  │           │  npm
       즉시  │           │  버전
       반영  │           │  관리
             ▼           ▼
     ┌─────────────────────────────┐
     │      /setup-design          │
     │   (설정 자동화 커맨드)        │
     └──────────────┬──────────────┘
                    │
    ┌───────┬───────┼───────┬───────┐
    ▼       ▼       ▼       ▼       ▼
 ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
 │ A   │ │ B   │ │ C   │ │ D   │ │ E   │
 └──┬──┘ └─────┘ └─────┘ └─────┘ └─────┘
    │
    │  새 컴포넌트 생성
    │         │
    │         ▼
    │  auto-contribute
    │         │
    └─────────┼─────────────────────────
              ▼
       design-system (중앙에 자동 반영)`}</div>
      </div>
    </div>
  );
}
