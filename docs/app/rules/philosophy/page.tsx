import { PageHeader } from '../../../ui/PageHeader';
import { CodeBlock } from '../../../ui/CodeBlock';
import { ContentBox } from '../../../ui/ContentBox';
import { Callout } from '../../../ui/Callout';
import { Separator } from '@components/separator';
import { Badge } from '@components/badge';
import { Kbd } from '@components/kbd';

export default function PhilosophyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Why Design Rules Exist"
        description="AI 에이전트 시대의 디자인 시스템 거버넌스"
      />

      <article className="space-y-12">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">1. 문제의 본질: 일관성의 붕괴</h2>
          <p className="text-muted-foreground leading-relaxed">
            디자인 시스템의 가치는 <strong className="text-foreground">일관성</strong>에서 나온다.
            버튼의 모서리 반경이 4px인지 8px인지, 기본 간격이 16px인지 20px인지—이런 세부사항들이
            모여 브랜드의 시각적 정체성을 형성한다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            전통적인 개발 환경에서는 디자이너가 Figma에서 정의한 값을 개발자가 수동으로 옮겼다.
            이 과정에서 오류가 발생했고, 코드 리뷰가 그것을 걸러냈다. 느리지만 작동했다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            AI 코드 생성 도구의 등장은 이 균형을 깨뜨렸다. AI는 "적당해 보이는" 값을 즉흥적으로 생성한다.
            <Kbd className="mx-1">padding: 12px</Kbd>가
            시스템에 없는 값이라는 것을, AI는 알지 못한다.
          </p>
          <Callout variant="info">
            <p className="text-sm italic">
              "AI가 생성한 코드의 양이 인간의 리뷰 능력을 초과하는 순간,
              시스템적 제약만이 일관성을 보장할 수 있다."
            </p>
          </Callout>
        </section>

        <Separator />

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">2. 하드코딩 금지: 토큰 시스템의 강제</h2>
          <p className="text-muted-foreground leading-relaxed">
            design-rules.md의 첫 번째 규칙은 단순하다:
            <strong className="text-foreground">CSS 변수만 사용하라.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-destructive">금지</div>
              <CodeBlock language="css">{`/* 하드코딩된 값 */
.button {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 6px;
}`}</CodeBlock>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">허용</div>
              <CodeBlock language="css">{`/* 토큰 참조 */
.button {
  background: var(--color-primary);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}`}</CodeBlock>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            이 규칙이 중요한 이유는 <strong className="text-foreground">변경 전파</strong> 때문이다.
            브랜드 색상이 바뀌면 <Kbd className="mx-1">tokens.css</Kbd>의
            한 줄만 수정하면 된다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            더 근본적으로, 토큰은 <strong className="text-foreground">의미적 추상화</strong>를 제공한다.
            <Kbd className="mx-1">#3b82f6</Kbd>는 "파란색"이지만,
            <Kbd className="mx-1">var(--color-primary)</Kbd>는
            "이 요소가 주요 액션임"을 선언한다.
          </p>
        </section>

        <Separator />

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">3. Generation Protocol: 4단계 검증 체계</h2>
          <p className="text-muted-foreground leading-relaxed">
            규칙을 정의하는 것과 규칙을 강제하는 것은 다른 문제다.
            Generation Protocol은 AI가 코드를 생성하기 <em>전에</em> 스스로 검증하도록 설계되었다.
          </p>

          <div className="space-y-4">
            {[
              { step: 1, title: '토큰 검사', desc: '생성할 코드의 모든 색상, 간격, 폰트, 반경 값이 tokens.css에 정의되어 있는지 확인한다. 하드코딩된 값이 발견되면 생성을 거부한다.' },
              { step: 2, title: '컴포넌트 확인', desc: '요청된 UI가 기존 컴포넌트로 구현 가능한지 확인한다. Button, Input 등 이미 존재하는 컴포넌트를 처음부터 다시 만들지 않는다.' },
              { step: 3, title: '표현 검증', desc: '"적당히", "예쁘게", "모던하게" 같은 모호한 지시가 있으면 구체적인 사양을 요청한다. 해석의 여지를 남기지 않는다.' },
              { step: 4, title: '생성 또는 거부', desc: '모든 검증을 통과하면 코드를 생성한다. 하나라도 실패하면 이유를 설명하고 생성을 거부한다.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <Badge variant="secondary" className="shrink-0">{item.step}</Badge>
                <div className="space-y-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            이 프로토콜의 핵심은 <strong className="text-foreground">"거부할 수 있는 AI"</strong>를 만드는 것이다.
            대부분의 AI 도구는 어떤 요청이든 최선을 다해 응답한다.
            그러나 디자인 시스템의 맥락에서, "최선의 추측"은 종종 시스템을 오염시킨다.
          </p>
        </section>

        <Separator />

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">4. Claude Code 통합: Skill로서의 규칙</h2>
          <p className="text-muted-foreground leading-relaxed">
            design-rules.md는 단순한 문서가 아니다. Claude Code의 <strong className="text-foreground">Skill</strong>로 등록되어,
            특정 조건에서 자동으로 에이전트의 컨텍스트에 주입된다.
          </p>

          <ContentBox>{`┌─────────────────────────────────────────────────────────┐
│                    Claude Code Agent                     │
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌────────────┐ │
│  │ User Prompt  │───▶│ Skill Loader │───▶│  Context   │ │
│  │              │    │              │    │  Window    │ │
│  │ "버튼 만들어" │    │ Trigger:     │    │            │ │
│  └──────────────┘    │ UI/컴포넌트   │    │ + rules   │ │
│                      │ 생성 감지     │    │ + tokens  │ │
│                      └──────────────┘    └────────────┘ │
└─────────────────────────────────────────────────────────┘`}</ContentBox>

          <h3 className="text-card-title mt-6">Skill 등록 구조</h3>
          <p className="text-muted-foreground leading-relaxed">
            <Kbd>.claude/skills/design-rules.md</Kbd> 파일은
            다음과 같은 메타데이터로 시작한다:
          </p>
          <CodeBlock language="yaml">{`---
description: UI/컴포넌트 생성 시 자동 적용되는 디자인 규칙
triggers:
  - UI
  - 컴포넌트
  - 버튼
  - 폼
  - 레이아웃
---`}</CodeBlock>
        </section>

        <Separator />

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">5. Hook을 통한 사후 검증</h2>
          <p className="text-muted-foreground leading-relaxed">
            Skill이 "사전 주입"이라면, Hook은 "사후 검증"이다.
            <Kbd className="mx-1">PostToolUse</Kbd> Hook은
            에이전트가 파일을 생성한 직후 실행된다.
          </p>
          <CodeBlock language="json">{`// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "command": "node .claude/scripts/validate-tokens.js $FILE"
    }]
  }
}`}</CodeBlock>
          <p className="text-muted-foreground leading-relaxed">
            이 Hook은 생성된 파일에서 하드코딩된 색상값(#으로 시작하는 hex 코드)이나
            토큰에 없는 px 값을 검출한다. 위반이 발견되면 경고를 출력하고,
            심각한 경우 커밋을 차단할 수 있다.
          </p>
        </section>

        <Separator />

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">6. 제약의 역설: 자유를 위한 규칙</h2>
          <p className="text-muted-foreground leading-relaxed">
            얼핏 보면 design-rules.md는 개발자의 자유를 제한하는 것처럼 보인다.
            원하는 색상을 쓸 수 없고, 원하는 간격을 줄 수 없다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            그러나 이 제약은 역설적으로 <strong className="text-foreground">더 큰 자유</strong>를 가능하게 한다:
          </p>
          <ul className="space-y-3 pl-4">
            {[
              { title: '의사결정 피로 감소', desc: '"이 버튼의 패딩을 몇 px로 할까?"라는 질문을 할 필요가 없다.' },
              { title: '리뷰 시간 단축', desc: '토큰만 사용했는지 확인하면 된다. 시각적 일관성은 시스템이 보장한다.' },
              { title: '안전한 실험', desc: '토큰 값을 변경해서 전체 시스템의 룩앤필을 한 번에 바꿀 수 있다.' },
              { title: 'AI 협업 가능', desc: '명확한 제약이 있어야 AI가 "올바른" 코드를 생성할 수 있다.' },
            ].map((item) => (
              <li key={item.title} className="flex gap-2">
                <span className="text-primary">•</span>
                <div>
                  <strong className="text-foreground">{item.title}</strong>
                  <span className="text-muted-foreground">: {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        {/* Section 7 - Conclusion */}
        <section className="space-y-4">
          <h2 className="text-subsection-title">결론</h2>
          <p className="text-muted-foreground leading-relaxed">
            AI 코드 생성 도구가 보편화되면서, 디자인 시스템의 역할은 "참고 자료"에서
            "강제 규칙"으로 변화하고 있다. design-rules.md는 이 변화의 구체적인 구현이다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            토큰 시스템, Generation Protocol, Skill 통합, Hook 검증—이 모든 요소가
            결합되어 "AI가 실수하기 어려운 환경"을 만든다.
            인간 개발자의 리뷰 부담을 줄이면서, 동시에 디자인 일관성을 보장한다.
          </p>
          <p className="text-foreground font-medium">
            이것이 design-rules.md가 존재하는 이유다.
          </p>
        </section>
      </article>
    </div>
  );
}
