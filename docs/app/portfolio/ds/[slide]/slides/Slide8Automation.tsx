export function Slide8Automation() {
  return (
    <div className="slide-inner slide-full">
      <div className="slide-section-header">
        <p className="slide-label">Design System · Automation</p>
        <h2 className="slide-section-title">양방향 동기화 자동화 체계</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)', flex: 1 }}>
        {/* Left - Download Flow */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)', color: 'var(--theme-primary)' }}>
            Flow 1: 다운로드 (중앙 → 소비자)
          </h4>
          <div className="slide-diagram" style={{ fontSize: '11px' }}>{`[중앙 저장소]
     │
     │ 1. 관리자가 파일 변경
     │
     ▼
2. GitHub Actions 감지
     │
     ▼
3. npm version patch + publish
     │
════════════════════════════
     │
     ▼    [소비자 프로젝트]
     │
4. Dependabot 감지 (매일 09:00)
     │
     ▼
5. PR 자동 생성
     │
     ▼
6. CI 통과 → Auto-merge
     │
     ▼
7. node_modules 갱신 완료!`}</div>
        </div>

        {/* Right - Upload Flow */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)', color: 'var(--theme-primary)' }}>
            Flow 2: 업로드 (소비자 → 중앙)
          </h4>
          <div className="slide-diagram" style={{ fontSize: '11px' }}>{`[소비자 프로젝트]
     │
     │ 1. "StatCard 만들어줘"
     │
     ▼
2. Claude가 파일 생성 (Write)
     │
     ▼
3. PostToolUse Hook 감지
   (components/ 폴더 매칭)
     │
     ▼
4. auto-contribute.sh 실행
     │
════════════════════════════
     │
     ▼    [중앙 저장소]
     │
5. GitHub API로 자동 커밋
   "feat: add StatCard (auto)"
     │
     ▼
6. publish.yml → npm publish
     │
     ▼
모든 소비자에게 전파 (Flow 1)`}</div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--spacing-3)' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>자동화 파일 전체 목록</h4>
        <table className="slide-table" style={{ fontSize: '12px' }}>
          <thead>
            <tr>
              <th>위치</th>
              <th>파일</th>
              <th>역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>중앙</td>
              <td>publish.yml</td>
              <td>변경 감지 → npm publish</td>
            </tr>
            <tr>
              <td>중앙</td>
              <td>token-change-check.yml</td>
              <td>토큰 삭제 감지 경고</td>
            </tr>
            <tr>
              <td>소비자</td>
              <td>dependabot.yml</td>
              <td>새 버전 감지</td>
            </tr>
            <tr>
              <td>소비자</td>
              <td>settings.local.json</td>
              <td>PostToolUse Hook</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
