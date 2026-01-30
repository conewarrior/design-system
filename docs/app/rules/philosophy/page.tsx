export default function PhilosophyPage() {
  return (
    <div className="philosophy-page">
      <header className="page-header">
        <h1>Why Design Rules Exist</h1>
        <p className="subtitle">
          AI 에이전트 시대의 디자인 시스템 거버넌스
        </p>
      </header>

      <article className="essay-content">
        <section className="essay-section">
          <h2>1. 문제의 본질: 일관성의 붕괴</h2>
          <p>
            디자인 시스템의 가치는 <strong>일관성</strong>에서 나온다. 버튼의 모서리 반경이 4px인지 8px인지,
            기본 간격이 16px인지 20px인지—이런 세부사항들이 모여 브랜드의 시각적 정체성을 형성한다.
          </p>
          <p>
            전통적인 개발 환경에서는 디자이너가 Figma에서 정의한 값을 개발자가 수동으로 옮겼다.
            이 과정에서 오류가 발생했고, 코드 리뷰가 그것을 걸러냈다. 느리지만 작동했다.
          </p>
          <p>
            AI 코드 생성 도구의 등장은 이 균형을 깨뜨렸다. AI는 "적당해 보이는" 값을 즉흥적으로 생성한다.
            <code>padding: 12px</code>가 시스템에 없는 값이라는 것을, AI는 알지 못한다.
            리뷰어가 하루에 수백 줄의 AI 생성 코드를 검토하게 되면서, 이런 미세한 불일치는 눈에 띄지 않고
            프로덕션에 배포된다.
          </p>
          <blockquote>
            "AI가 생성한 코드의 양이 인간의 리뷰 능력을 초과하는 순간,
            시스템적 제약만이 일관성을 보장할 수 있다."
          </blockquote>
        </section>

        <section className="essay-section">
          <h2>2. 하드코딩 금지: 토큰 시스템의 강제</h2>
          <p>
            design-rules.md의 첫 번째 규칙은 단순하다: <strong>CSS 변수만 사용하라.</strong>
          </p>
          <div className="code-comparison">
            <div className="code-block bad">
              <div className="code-label">금지</div>
              <pre><code>{`/* 하드코딩된 값 */
.button {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 6px;
}`}</code></pre>
            </div>
            <div className="code-block good">
              <div className="code-label">허용</div>
              <pre><code>{`/* 토큰 참조 */
.button {
  background: var(--color-primary);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}`}</code></pre>
            </div>
          </div>
          <p>
            이 규칙이 중요한 이유는 <strong>변경 전파</strong> 때문이다. 브랜드 색상이 바뀌면
            <code>tokens.css</code>의 한 줄만 수정하면 된다. 하드코딩된 값은 전체 코드베이스를
            grep해야 한다—그리고 AI가 생성한 코드에는 어떤 값이 숨어있을지 예측할 수 없다.
          </p>
          <p>
            더 근본적으로, 토큰은 <strong>의미적 추상화</strong>를 제공한다.
            <code>#3b82f6</code>는 "파란색"이지만, <code>var(--color-primary)</code>는
            "이 요소가 주요 액션임"을 선언한다. AI가 후자를 사용하도록 강제하면,
            색상 선택이 아닌 의미 선택을 하게 된다.
          </p>
        </section>

        <section className="essay-section">
          <h2>3. Generation Protocol: 4단계 검증 체계</h2>
          <p>
            규칙을 정의하는 것과 규칙을 강제하는 것은 다른 문제다.
            Generation Protocol은 AI가 코드를 생성하기 <em>전에</em> 스스로 검증하도록 설계되었다.
          </p>
          <div className="protocol-steps">
            <div className="protocol-step">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">1</div>
              <div className="space-y-2">
                <h4>토큰 검사</h4>
                <p>
                  생성할 코드의 모든 색상, 간격, 폰트, 반경 값이 tokens.css에 정의되어 있는지 확인한다.
                  하드코딩된 값이 발견되면 <strong>생성을 거부</strong>한다.
                </p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">2</div>
              <div className="space-y-2">
                <h4>컴포넌트 확인</h4>
                <p>
                  요청된 UI가 기존 컴포넌트로 구현 가능한지 확인한다.
                  Button, Input 등 이미 존재하는 컴포넌트를 처음부터 다시 만들지 않는다.
                </p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">3</div>
              <div className="space-y-2">
                <h4>표현 검증</h4>
                <p>
                  "적당히", "예쁘게", "모던하게" 같은 모호한 지시가 있으면
                  구체적인 사양을 요청한다. 해석의 여지를 남기지 않는다.
                </p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">4</div>
              <div className="space-y-2">
                <h4>생성 또는 거부</h4>
                <p>
                  모든 검증을 통과하면 코드를 생성한다.
                  하나라도 실패하면 이유를 설명하고 생성을 거부한다.
                </p>
              </div>
            </div>
          </div>
          <p>
            이 프로토콜의 핵심은 <strong>"거부할 수 있는 AI"</strong>를 만드는 것이다.
            대부분의 AI 도구는 어떤 요청이든 최선을 다해 응답한다.
            그러나 디자인 시스템의 맥락에서, "최선의 추측"은 종종 시스템을 오염시킨다.
          </p>
        </section>

        <section className="essay-section">
          <h2>4. Claude Code 통합: Skill로서의 규칙</h2>
          <p>
            design-rules.md는 단순한 문서가 아니다. Claude Code의 <strong>Skill</strong>로 등록되어,
            특정 조건에서 자동으로 에이전트의 컨텍스트에 주입된다.
          </p>
          <div className="architecture-diagram">
            <pre>{`┌─────────────────────────────────────────────────────────┐
│                    Claude Code Agent                     │
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌────────────┐ │
│  │ User Prompt  │───▶│ Skill Loader │───▶│  Context   │ │
│  │              │    │              │    │  Window    │ │
│  │ "버튼 만들어" │    │ Trigger:     │    │            │ │
│  └──────────────┘    │ UI/컴포넌트   │    │ + rules   │ │
│                      │ 생성 감지     │    │ + tokens  │ │
│                      └──────────────┘    └────────────┘ │
│                                                 │        │
│                                                 ▼        │
│                                          ┌───────────┐  │
│                                          │ Response  │  │
│                                          │ Generation│  │
│                                          └───────────┘  │
└─────────────────────────────────────────────────────────┘`}</pre>
          </div>
          <h3>Skill 등록 구조</h3>
          <p>
            <code>.claude/skills/design-rules.md</code> 파일은 다음과 같은 메타데이터로 시작한다:
          </p>
          <div className="bg-muted rounded-md p-4 overflow-x-auto">
            <pre><code>{`---
description: UI/컴포넌트 생성 시 자동 적용되는 디자인 규칙
triggers:
  - UI
  - 컴포넌트
  - 버튼
  - 폼
  - 레이아웃
---`}</code></pre>
          </div>
          <p>
            사용자가 "로그인 폼 만들어줘"라고 요청하면, Claude Code는 "폼" 키워드를 감지하고
            design-rules.md의 전체 내용을 컨텍스트에 추가한다. 에이전트는 이제 토큰 시스템,
            기존 컴포넌트 목록, Generation Protocol을 "알고 있는" 상태에서 코드를 생성한다.
          </p>
        </section>

        <section className="essay-section">
          <h2>5. Hook을 통한 사후 검증</h2>
          <p>
            Skill이 "사전 주입"이라면, Hook은 "사후 검증"이다.
            <code>PostToolUse</code> Hook은 에이전트가 파일을 생성한 직후 실행된다.
          </p>
          <div className="bg-muted rounded-md p-4 overflow-x-auto">
            <pre><code>{`// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "command": "node .claude/scripts/validate-tokens.js $FILE"
    }]
  }
}`}</code></pre>
          </div>
          <p>
            이 Hook은 생성된 파일에서 하드코딩된 색상값(#으로 시작하는 hex 코드)이나
            토큰에 없는 px 값을 검출한다. 위반이 발견되면 경고를 출력하고,
            심각한 경우 커밋을 차단할 수 있다.
          </p>
          <p>
            양방향 동기화 시스템에서 이 Hook은 더 중요해진다.
            프로젝트에서 생성된 컴포넌트가 중앙 저장소로 자동 커밋되기 전에,
            Hook이 품질 게이트 역할을 수행한다.
          </p>
        </section>

        <section className="essay-section">
          <h2>6. 제약의 역설: 자유를 위한 규칙</h2>
          <p>
            얼핏 보면 design-rules.md는 개발자의 자유를 제한하는 것처럼 보인다.
            원하는 색상을 쓸 수 없고, 원하는 간격을 줄 수 없다.
          </p>
          <p>
            그러나 이 제약은 역설적으로 <strong>더 큰 자유</strong>를 가능하게 한다:
          </p>
          <ul className="benefit-list">
            <li>
              <strong>의사결정 피로 감소</strong>: "이 버튼의 패딩을 몇 px로 할까?"라는
              질문을 할 필요가 없다. <code>--spacing-2</code>를 쓰면 된다.
            </li>
            <li>
              <strong>리뷰 시간 단축</strong>: 토큰만 사용했는지 확인하면 된다.
              시각적 일관성은 시스템이 보장한다.
            </li>
            <li>
              <strong>안전한 실험</strong>: 토큰 값을 변경해서 전체 시스템의
              룩앤필을 한 번에 바꿀 수 있다. 개별 컴포넌트를 건드릴 필요 없다.
            </li>
            <li>
              <strong>AI 협업 가능</strong>: 명확한 제약이 있어야 AI가
              "올바른" 코드를 생성할 수 있다. 모호함은 AI의 적이다.
            </li>
          </ul>
        </section>

        <section className="essay-section">
          <h2>7. 진화하는 규칙</h2>
          <p>
            design-rules.md는 정적인 문서가 아니다. 팀이 새로운 패턴을 발견하면 규칙이 추가되고,
            더 이상 유효하지 않은 규칙은 제거된다.
          </p>
          <p>
            양방향 동기화 시스템은 이 진화를 지원한다.
            개별 프로젝트에서 design-rules.md를 수정하면, 그 변경사항이 중앙 저장소로
            자동 반영된다. 동시에, 중앙에서 규칙이 업데이트되면 Dependabot이
            각 프로젝트에 PR을 생성한다.
          </p>
          <p>
            이것이 우리가 design-rules.md를 npm 패키지에 포함시키고,
            Skill로 등록하고, Hook으로 검증하는 이유다.
            규칙은 문서가 아니라 <strong>실행 가능한 코드</strong>여야 한다.
          </p>
        </section>

        <section className="essay-section conclusion">
          <h2>결론</h2>
          <p>
            AI 코드 생성 도구가 보편화되면서, 디자인 시스템의 역할은 "참고 자료"에서
            "강제 규칙"으로 변화하고 있다. design-rules.md는 이 변화의 구체적인 구현이다.
          </p>
          <p>
            토큰 시스템, Generation Protocol, Skill 통합, Hook 검증—이 모든 요소가
            결합되어 "AI가 실수하기 어려운 환경"을 만든다.
            인간 개발자의 리뷰 부담을 줄이면서, 동시에 디자인 일관성을 보장한다.
          </p>
          <p>
            이것이 design-rules.md가 존재하는 이유다.
          </p>
        </section>
      </article>
    </div>
  );
}
