export function Slide2Problem() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Problem Table */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">Design System · Problem</p>
          <h2 className="slide-section-title">프로젝트마다 다른 UI, 반복되는 설정</h2>
        </div>

        <table className="slide-table">
          <thead>
            <tr>
              <th>문제</th>
              <th>현상</th>
              <th>영향</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UI 불일치</td>
              <td>프로젝트 A는 #3B82F6, B는 #2563EB 사용</td>
              <td>브랜드 일관성 붕괴</td>
            </tr>
            <tr>
              <td>설정 복잡</td>
              <td>토큰 복사, 패키지 설치, 규칙 문서화 7단계</td>
              <td>신규 프로젝트 온보딩 30분+</td>
            </tr>
            <tr>
              <td>업데이트 누락</td>
              <td>중앙에서 토큰 변경해도 각 프로젝트 수동 반영</td>
              <td>버전 파편화</td>
            </tr>
            <tr>
              <td>컴포넌트 중복</td>
              <td>같은 Button을 프로젝트마다 새로 구현</td>
              <td>개발 리소스 낭비</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-3)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
            "나도 디자인 시스템을 써왔는데, 프로젝트마다 primary가 다르고, 모서리 값이 다르고...
            회사 디자인 시스템이라고 하기엔 일관성이 없었다."
          </p>
        </div>
      </div>

      {/* Right - Before/After Visual */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">Before / After</h3>
        </div>

        <div className="slide-comparison">
          <div className="comparison-box before">
            <p className="comparison-label">Before</p>
            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 8px 0' }}>프로젝트 A</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '24px', background: '#3B82F6', borderRadius: '4px' }} />
                <div style={{ width: '24px', height: '24px', background: '#60A5FA', borderRadius: '4px' }} />
              </div>
              <p style={{ margin: '0 0 8px 0' }}>프로젝트 B</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '24px', background: '#2563EB', borderRadius: '4px' }} />
                <div style={{ width: '24px', height: '24px', background: '#3B82F6', borderRadius: '4px' }} />
              </div>
              <p style={{ margin: '0 0 8px 0' }}>프로젝트 C</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', background: '#1D4ED8', borderRadius: '4px' }} />
                <div style={{ width: '24px', height: '24px', background: '#2563EB', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          <div className="comparison-box after">
            <p className="comparison-label">After</p>
            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 8px 0' }}>모든 프로젝트</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '24px', background: '#f97316', borderRadius: '4px' }} />
                <div style={{ width: '24px', height: '24px', background: '#fb923c', borderRadius: '4px' }} />
                <div style={{ width: '24px', height: '24px', background: '#ea580c', borderRadius: '4px' }} />
              </div>
              <p style={{ margin: 0, color: 'var(--color-muted)', fontSize: '12px' }}>
                tokens.css에서 중앙 관리<br />
                변경 시 모든 프로젝트 자동 반영
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
