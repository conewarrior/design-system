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
          문서 사이트 스크린샷
        </div>
      </div>

      {/* Right - Content */}
      <div className="slide-cover-right">
        {/* Title Section */}
        <div>
          <p className="slide-label">2026 · Design System</p>
          <h1 className="slide-title">
            AX 조직을 위한{' '}
            <span className="slide-title-accent">디자인 시스템 구축</span> 및{' '}
            <span className="slide-title-accent">양방향 동기 자동화</span>
          </h1>
        </div>

        {/* Timeline */}
        <div className="slide-timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>문제 정의</h4>
              <p>바이브코딩 프로젝트마다 다른 컬러, 간격 사용 / 신규 프로젝트에 디자인 세팅하는데 30분 이상 소요</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>설정 자동화</h4>
              <p>npm 설치, CDN 연결, 규칙 복사, Hook 설정을 명령어 하나로.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>솔루션 설계</h4>
              <p>토큰과 컴포넌트를 중앙에서 관리, 자동 동기화 구조.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>업데이트 자동화</h4>
              <p>Dependabot이 새 버전 감지 후 PR 생성, CI 통과 시 자동 머지.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>/setup-design</h4>
              <p>Claude Code Command로 설정 자동화. 실행 단계와 구성요소.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>품질 체계</h4>
              <p>Generation Protocol로 토큰 미사용, 중복, 접근성 위반 차단.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>배포 체계</h4>
              <p>토큰은 CDN으로 즉시 반영, 컴포넌트는 npm으로 버전 관리.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>문서 사이트</h4>
              <p>설치 가이드, 토큰 시각화, 규칙 문서, 버전 대시보드까지 9페이지 구성.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="slide-stats">
          <div className="stat-item">
            <h5>토큰 시스템</h5>
            <p>3-tier 계층, CDN 즉시반영</p>
          </div>
          <div className="stat-item">
            <h5>자동화 체계</h5>
            <p>/setup-design 원클릭 설정</p>
          </div>
          <div className="stat-item">
            <h5>품질 관리</h5>
            <p>Generation Protocol</p>
          </div>
          <div className="stat-item">
            <h5>문서화</h5>
            <p>9페이지 문서 사이트 구축</p>
          </div>
        </div>
      </div>
    </div>
  );
}
