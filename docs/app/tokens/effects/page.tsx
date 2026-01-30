export default function EffectsPage() {
  // tokens.css 실제 Shadow 토큰
  const shadowTokens = [
    { name: '--shadow-xs', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', usage: '미세한 깊이감' },
    { name: '--shadow-sm', value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), ...', usage: '카드, 버튼' },
    { name: '--shadow-md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), ...', usage: '드롭다운, 호버' },
    { name: '--shadow-lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), ...', usage: '모달, 팝오버' },
    { name: '--shadow-xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), ...', usage: '다이얼로그' },
    { name: '--shadow-2xl', value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', usage: '대형 오버레이' },
    { name: '--shadow-inner', value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)', usage: '인풋 내부' },
    { name: '--shadow-none', value: '0 0 #0000', usage: '그림자 제거' },
  ];

  // tokens.css 실제 Z-Index 토큰
  const zIndexTokens = [
    { name: '--z-index-hide', value: '-1', usage: '숨김 요소' },
    { name: '--z-index-base', value: '0', usage: '기본 콘텐츠' },
    { name: '--z-index-dropdown', value: '100', usage: '드롭다운 메뉴' },
    { name: '--z-index-sticky', value: '200', usage: '스티키 헤더' },
    { name: '--z-index-fixed', value: '300', usage: '고정 네비게이션' },
    { name: '--z-index-modal-backdrop', value: '400', usage: '모달 배경 딤' },
    { name: '--z-index-modal', value: '500', usage: '모달' },
    { name: '--z-index-popover', value: '600', usage: '팝오버' },
    { name: '--z-index-tooltip', value: '700', usage: '툴팁' },
    { name: '--z-index-toast', value: '800', usage: '토스트 알림' },
  ];

  // tokens.css 실제 Duration 토큰
  const durationTokens = [
    { name: '--duration-fastest', value: '50ms', usage: '즉각적인 피드백' },
    { name: '--duration-faster', value: '100ms', usage: '호버 효과' },
    { name: '--duration-fast', value: '150ms', usage: '빠른 전환' },
    { name: '--duration-normal', value: '200ms', usage: '기본 전환' },
    { name: '--duration-slow', value: '300ms', usage: '강조 전환' },
    { name: '--duration-slower', value: '400ms', usage: '모달 열기' },
    { name: '--duration-slowest', value: '500ms', usage: '대형 애니메이션' },
  ];

  // tokens.css 실제 Easing 토큰
  const easingTokens = [
    { name: '--easing-linear', value: 'linear', usage: '진행 바, 로딩' },
    { name: '--easing-in', value: 'cubic-bezier(0.4, 0, 1, 1)', usage: 'exit 애니메이션' },
    { name: '--easing-out', value: 'cubic-bezier(0, 0, 0.2, 1)', usage: 'enter 애니메이션' },
    { name: '--easing-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: '상태 전환' },
    { name: '--easing-bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', usage: '바운스 효과' },
  ];

  // tokens.css 실제 Border Width 토큰
  const borderWidthTokens = [
    { name: '--border-width-0', value: '0', usage: '보더 없음' },
    { name: '--border-width-1', value: '1px', usage: '기본 보더' },
    { name: '--border-width-2', value: '2px', usage: '강조 보더' },
    { name: '--border-width-4', value: '4px', usage: '두꺼운 보더' },
    { name: '--border-width-8', value: '8px', usage: '매우 두꺼운 보더' },
  ];

  // tokens.css 실제 Opacity 토큰
  const opacityTokens = [
    { name: '--opacity-0', value: '0', usage: '완전 투명' },
    { name: '--opacity-5', value: '0.05', usage: '매우 옅음' },
    { name: '--opacity-10', value: '0.1', usage: '옅음' },
    { name: '--opacity-20', value: '0.2', usage: '20%' },
    { name: '--opacity-25', value: '0.25', usage: '25%' },
    { name: '--opacity-30', value: '0.3', usage: '30%' },
    { name: '--opacity-40', value: '0.4', usage: '40%' },
    { name: '--opacity-50', value: '0.5', usage: '반투명' },
    { name: '--opacity-60', value: '0.6', usage: '60%' },
    { name: '--opacity-70', value: '0.7', usage: '70%' },
    { name: '--opacity-75', value: '0.75', usage: '75%' },
    { name: '--opacity-80', value: '0.8', usage: '80%' },
    { name: '--opacity-90', value: '0.9', usage: '90%' },
    { name: '--opacity-95', value: '0.95', usage: '거의 불투명' },
    { name: '--opacity-100', value: '1', usage: '완전 불투명' },
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Effects</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">개요</h2>
        <p className="text-muted-foreground">
          Effects 토큰은 그림자(shadow), 레이어(z-index), 모션(duration, easing),
          보더 두께, 투명도를 정의합니다. 이 토큰들로 UI의 깊이감과 상호작용을 표현합니다.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Shadow</h2>
        <p className="text-muted-foreground">
          엘리베이션(높이)에 따른 그림자입니다. 높이가 높을수록 그림자가 커집니다.
        </p>
        <div className="shadow-token-grid">
          {shadowTokens.map((token) => (
            <div key={token.name} className="shadow-token-item">
              <div
                className="shadow-demo-box"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--color-bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: `var(${token.name})`,
                }}
              />
              <div className="shadow-token-info">
                <code>{token.name}</code>
                <span className="token-usage">{token.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Z-Index</h2>
        <p className="text-muted-foreground">
          UI 레이어 스택 순서입니다. 숫자가 클수록 위에 표시됩니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
              </tr>
            </thead>
            <tbody>
              {zIndexTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Duration</h2>
        <p className="text-muted-foreground">
          애니메이션 지속 시간입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
              </tr>
            </thead>
            <tbody>
              {durationTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Easing</h2>
        <p className="text-muted-foreground">
          애니메이션 가속/감속 곡선입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
              </tr>
            </thead>
            <tbody>
              {easingTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td style={{ fontSize: 'var(--font-size-xs)' }}>{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Border Width</h2>
        <p className="text-muted-foreground">
          테두리 두께 토큰입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
                <th className="text-left p-2 border-b font-medium text-sm">시각화</th>
              </tr>
            </thead>
            <tbody>
              {borderWidthTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                  <td className="p-2 border-b text-sm">
                    {token.value !== '0' && (
                      <div
                        style={{
                          width: '40px',
                          height: '20px',
                          border: `${token.value} solid var(--color-primary)`,
                          borderRadius: 'var(--radius-sm)',
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Opacity</h2>
        <p className="text-muted-foreground">
          투명도 토큰입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
                <th className="text-left p-2 border-b font-medium text-sm">시각화</th>
              </tr>
            </thead>
            <tbody>
              {opacityTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                  <td className="p-2 border-b text-sm">
                    <div
                      style={{
                        width: '40px',
                        height: '20px',
                        background: 'var(--color-primary)',
                        opacity: parseFloat(token.value),
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">사용 가이드</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3>카드 호버</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-faster) var(--easing-out);
}
.card:hover {
  box-shadow: var(--shadow-md);
}`}</code></pre>
          </div>
          <div className="space-y-2">
            <h3>모달</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.modal-backdrop {
  z-index: var(--z-index-modal-backdrop);
  opacity: var(--opacity-50);
}
.modal {
  z-index: var(--z-index-modal);
  box-shadow: var(--shadow-xl);
}`}</code></pre>
          </div>
          <div className="space-y-2">
            <h3>버튼 피드백</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.button {
  transition: all var(--duration-fastest) var(--easing-in-out);
}
.button:hover {
  box-shadow: var(--shadow-md);
}
.button:active {
  box-shadow: var(--shadow-xs);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">CSS 사용 예시</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* tokens.css에서 import */
@import '@design-geniefy/ui/tokens.css';

/* 또는 CDN */
@import url('https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css');

/* 사용 */
.card {
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-normal) var(--easing-out);
}
.modal {
  z-index: var(--z-index-modal);
  box-shadow: var(--shadow-xl);
}
.overlay {
  opacity: var(--opacity-50);
}`}</code></pre>
      </section>
    </div>
  );
}
