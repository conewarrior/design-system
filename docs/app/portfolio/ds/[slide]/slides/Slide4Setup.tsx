export function Slide4Setup() {
  return (
    <div className="slide-inner slide-full">
      <div className="slide-section-header">
        <p className="slide-label">Design System · Setup Command</p>
        <h2 className="slide-section-title">/setup-design 실행 시 작동 로직</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)', flex: 1 }}>
        {/* Left - Flow */}
        <div>
          <div className="slide-code" style={{ marginBottom: 'var(--spacing-3)' }}>
            <span className="keyword">$</span> /setup-design
          </div>

          <div className="slide-flow">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-content">
                <h4>프로젝트 타입 감지</h4>
                <p>package.json 존재 여부로 Node.js/HTML 구분</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-content">
                <h4>npm install</h4>
                <p>@design-geniefy/ui 패키지 설치</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <div className="flow-content">
                <h4>토큰 import</h4>
                <p>layout.tsx에 tokens.css import 추가</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">4</div>
              <div className="flow-content">
                <h4>CLAUDE.md 설정</h4>
                <p>디자인 시스템 사용 규칙 문서화</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">5</div>
              <div className="flow-content">
                <h4>Hooks 등록</h4>
                <p>UserPromptSubmit, PostToolUse Hook 설정</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-number">6</div>
              <div className="flow-content">
                <h4>Dependabot 설정</h4>
                <p>자동 업데이트 + Auto-merge 워크플로우</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - File Structure */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>설치되는 파일 목록</h4>
          <div className="slide-diagram" style={{ fontSize: '12px' }}>{`프로젝트/
├── package.json           ← @design-geniefy/ui 추가
├── node_modules/
│   └── @design-geniefy/ui/
│       ├── tokens.css     ← 토큰 (import로 사용)
│       ├── components/    ← 컴포넌트
│       └── .claude/
│           └── skills/
│               └── design-rules.md ← Hook이 직접 참조
│
├── app/layout.tsx         ← tokens.css import 추가
├── CLAUDE.md              ← 디자인 규칙 안내
│
├── .claude/
│   ├── settings.local.json ← Hooks 등록
│   └── scripts/
│       └── auto-contribute.sh
│
└── .github/
    ├── dependabot.yml
    └── workflows/
        └── dependabot-auto-merge.yml`}</div>

          <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-2)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '12px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
              핵심: design-rules.md를 복사하지 않고 node_modules에서 직접 참조
              → npm 업데이트 시 규칙도 자동 업데이트
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
