# 디자인 시스템 포트폴리오 구성안

## 1장. 커버

**제목**: 조직 공용 디자인 시스템 구축 및 양방향 동기화 자동화

**서브타이틀**: 7단계 수동 설정 → 명령어 1개, 온보딩 90% 단축

**핵심 키워드 (하단 배치)**:
- Design Tokens · npm · CDN
- Claude Code Hooks · GitHub API
- Dependabot · Auto-merge
- Generation Protocol

---

## 2장. 문제 정의

**제목**: 프로젝트마다 다른 UI, 반복되는 설정

| 문제 | 현상 | 영향 |
|------|------|------|
| UI 불일치 | 프로젝트 A는 `#3B82F6`, B는 `#2563EB` 사용 | 브랜드 일관성 붕괴 |
| 설정 복잡 | 토큰 복사, 패키지 설치, 규칙 문서화 7단계 | 신규 프로젝트 온보딩 30분+ |
| 업데이트 누락 | 중앙에서 토큰 변경해도 각 프로젝트 수동 반영 | 버전 파편화 |
| 컴포넌트 중복 | 같은 Button을 프로젝트마다 새로 구현 | 개발 리소스 낭비 |

**비주얼**: Before/After 스크린샷 (색상 불일치 예시)

---

## 3장. 솔루션 개요

**제목**: 중앙 집중형 토큰 + 컴포넌트 + 자동 동기화

```
┌─────────────────────────────────────────────────────────┐
│              design-system (중앙 저장소)                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │tokens   │  │components│  │design-  │  │docs     │    │
│  │.css     │  │/Button  │  │rules.md │  │사이트   │    │
│  │         │  │/Input   │  │(규칙)   │  │         │    │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘    │
│       │            │            │            │          │
│       ↓            ↓            ↓            ↓          │
│    CDN 배포     npm 배포    스킬 참조    문서 제공      │
└───────┼────────────┼────────────┼────────────┼──────────┘
        │            │            │            │
        ↓            ↓            ↓            ↓
   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
   │프로젝트 A │ │프로젝트 B │ │프로젝트 C │ │프로젝트 D │
   │/setup    │ │/setup    │ │/setup    │ │/setup    │
   │한 번 실행│ │한 번 실행│ │한 번 실행│ │한 번 실행│
   └──────────┘ └──────────┘ └──────────┘ └──────────┘
```

**핵심 원칙**:
1. **Single Source of Truth**: 모든 토큰/컴포넌트는 중앙에서 관리
2. **Zero Config**: 설정 없이 명령어 하나로 완료
3. **Auto Sync**: 업데이트는 자동으로 전파

---

## 4장. 핵심 인프라 구축

**제목**: 토큰 + 컴포넌트 이중 배포 체계

### 4.1 Design Tokens (tokens.css)

```css
:root {
  /* Colors */
  --color-primary: #3B82F6;
  --color-foreground: #0f172a;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;

  /* Typography */
  --font-size-base: 1rem;
}

.dark {
  --color-foreground: #f8fafc;
}
```

**배포 방식: jsDelivr CDN**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css">
```

| 도구 | 역할 | 선택 이유 |
|------|------|-----------|
| **jsDelivr** | CDN 배포 | GitHub 연동, 캐시 자동 무효화, 무료 |
| **CSS 변수** | 토큰 정의 | 런타임 변경 가능, 다크모드 쉬움 |

---

### 4.2 Components (npm 패키지)

```tsx
// @geniefy/ui - Button 컴포넌트
export function Button({ variant = 'primary', children }) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}
```

**배포 방식: npm + GitHub Actions**

```yaml
# .github/workflows/publish.yml
on:
  push:
    branches: [main]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm publish
```

| 도구 | 역할 | 선택 이유 |
|------|------|-----------|
| **npm** | 패키지 레지스트리 | 버전 관리, 의존성 해결, 표준 생태계 |
| **node_modules** | 의존성 설치 위치 | npm install 시 자동 다운로드 |
| **GitHub Actions** | CI/CD | main push 시 자동 배포 |

**왜 이중 배포인가?**
- **CDN (tokens.css)**: 버전 없이 항상 최신, 즉시 반영 필요한 디자인 토큰
- **npm (components)**: 버전 고정, Breaking Change 방지, 안정성 필요한 컴포넌트

---

## 5장. 자동화 시스템

**제목**: 설정 자동화 + 업데이트 자동화

### 5.1 /setup-design 명령어

**Claude Code Command**: 사용자가 `/명령어` 형태로 실행하는 자동화 스크립트

```markdown
<!-- .claude/commands/setup-design.md -->
# /setup-design

프로젝트에 디자인 시스템을 자동 설정합니다.

## 실행 단계
1. npm install @geniefy/ui
2. tokens.css CDN 링크 추가
3. design-rules.md를 .claude/skills/에 복사
4. auto-contribute Hook 설치
```

**실행 전/후 비교**:

| Before (수동 7단계) | After (/setup-design) |
|---------------------|----------------------|
| 1. npm install 실행 | `/setup-design` 입력 |
| 2. tokens.css 다운로드 | 자동 |
| 3. HTML에 link 태그 추가 | 자동 |
| 4. design-rules.md 복사 | 자동 |
| 5. CLAUDE.md에 규칙 추가 | 자동 |
| 6. Hook 설정 | 자동 |
| 7. 테스트 | 자동 |

---

### 5.2 자동 업데이트 (Dependabot + Auto-merge)

**Dependabot**: GitHub에서 제공하는 의존성 자동 업데이트 봇

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    schedule:
      interval: "daily"
    open-pull-requests-limit: 10
```

**Auto-merge Workflow**: CI 통과 시 자동 머지

```yaml
# .github/workflows/auto-merge.yml
on:
  pull_request:
    types: [opened]

jobs:
  auto-merge:
    if: contains(github.event.pull_request.user.login, 'dependabot')
    runs-on: ubuntu-latest
    steps:
      - run: gh pr merge --auto --squash "$PR_URL"
```

| 도구 | 역할 | 동작 |
|------|------|------|
| **Dependabot** | 새 버전 감지 | @geniefy/ui 업데이트 시 PR 자동 생성 |
| **GitHub Actions** | CI 실행 | 빌드/테스트 통과 확인 |
| **Auto-merge** | 자동 머지 | minor/patch는 CI 통과 시 자동 적용 |

**흐름**:
```
중앙에서 v1.0.1 배포
       ↓
Dependabot이 프로젝트 A에 PR 생성
       ↓
CI 통과 → Auto-merge
       ↓
프로젝트 A 자동 업데이트 완료
```

---

## 6장. 품질 보장 체계

**제목**: 무분별한 코드 유입 차단

### 6.1 design-rules.md (Claude Skill)

**Claude Skill**: AI가 특정 상황에서 자동으로 참조하는 규칙 문서

```markdown
<!-- .claude/skills/design-rules.md -->
# Design Rules

## 1. 필수 제약
- CSS 하드코딩 금지: `color: #3B82F6` ❌ → `var(--color-primary)` ✅
- px 값 금지: `padding: 16px` ❌ → `var(--spacing-md)` ✅

## 2. Generation Protocol
UI 생성 요청 시 4단계 검증:
1. 토큰 사용 여부 확인
2. 기존 컴포넌트 재사용 가능 여부
3. 접근성 체크
4. 반응형 대응
```

| 트리거 | 동작 |
|--------|------|
| "Button 만들어줘" | design-rules.md 자동 로드 |
| "새 컴포넌트 생성" | Generation Protocol 4단계 실행 |

---

### 6.2 Generation Protocol 상세

**왜 필요한가?**
양방향 동기화에서 각 프로젝트가 자유롭게 컴포넌트를 생성하면:
- 토큰 미사용 코드 유입
- 중복 컴포넌트 난립
- 전체 디자인 일관성 붕괴

**4단계 검증**:

| 단계 | 검증 항목 | 실패 시 |
|------|----------|---------|
| 1. 토큰 검사 | CSS 변수만 사용했는가? | 하드코딩 발견 시 거부 |
| 2. 중복 검사 | 기존 컴포넌트로 해결 가능한가? | 재사용 권장 |
| 3. 접근성 | aria-label, 키보드 지원 | 누락 시 추가 요청 |
| 4. 반응형 | 모바일 대응 여부 | 미대응 시 경고 |

**실제 동작 예시**:
```
사용자: "빨간 버튼 만들어줘"

AI (Generation Protocol 적용):
❌ color: red 사용 불가
✅ var(--color-error) 또는 var(--color-danger) 사용
→ 토큰에 해당 색상 없으면 토큰 추가 먼저 제안
```

---

## 7장. 문서 사이트 구성

**제목**: 왜 이 페이지들이 필요한가

### 7.1 전체 구조

```
docs/
├── / (Introduction)
├── /install/ (설치 가이드)
├── /install/how-it-works/ (동작 원리)
├── /tokens/ (토큰 시각화)
├── /rules/ (규칙 전문)
├── /components/ (컴포넌트 데모)
└── /updates/ (버전 채택 대시보드)
```

### 7.2 각 페이지의 존재 이유

| 페이지 | 대상 | 해결하는 문제 |
|--------|------|---------------|
| **Introduction** | 신규 팀원 | "이게 뭔가요?" 질문 제거 |
| **Install** | 개발자 | 설정 방법 표준화, 구두 전달 제거 |
| **How it Works** | 의사결정자 | 기술 선택 근거 문서화, 신뢰 확보 |
| **Design Tokens** | 디자이너/개발자 | 사용 가능한 토큰 한눈에 파악 |
| **Design Rules** | AI/개발자 | 규칙 위반 사전 방지 |
| **Components** | 개발자 | 컴포넌트 사용법 + 실시간 데모 |
| **Updates Dashboard** | 팀 리드 | 프로젝트별 버전 채택 현황 모니터링 |

---

### 7.3 Updates Dashboard 상세

**왜 만들었나?**
- 중앙에서 v1.2.0 배포했는데 어느 프로젝트가 아직 v1.0.0인지 모름
- 업데이트 독촉을 수동으로 해야 함
- 파편화 현황 파악 불가

**제공 정보**:
```
┌─────────────────────────────────────────────┐
│ Version Adoption Dashboard                  │
├─────────────────────────────────────────────┤
│ Latest: v1.2.0                              │
│                                             │
│ ████████████████████░░░░ 80% (8/10 projects)│
│                                             │
│ v1.2.0 ████████ 5 projects                  │
│ v1.1.0 ████     3 projects                  │
│ v1.0.0 ██       2 projects ← 업데이트 필요  │
└─────────────────────────────────────────────┘
```

---

### 7.4 How it Works 상세

**왜 만들었나?**
- "왜 CDN이랑 npm 둘 다 쓰나요?" 질문 반복
- 기술 선택 근거가 구전으로만 전달
- 새 팀원이 구조 이해에 시간 소요

**포함 내용**:
1. 아키텍처 다이어그램
2. 각 도구 선택 이유
3. 데이터 흐름 설명
4. FAQ

---

## 8장. 양방향 동기화

**제목**: 중앙 → 프로젝트 → 중앙

### 8.1 다운스트림 (중앙 → 프로젝트)

```
design-system에서 Button v2 배포
           ↓
npm publish (GitHub Actions)
           ↓
Dependabot이 프로젝트들에 PR 생성
           ↓
CI 통과 → Auto-merge
           ↓
모든 프로젝트 자동 업데이트
```

### 8.2 업스트림 (프로젝트 → 중앙)

**Claude Code Hook**: 특정 도구 사용 후 자동 실행되는 스크립트

```json
// settings.local.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "command": "node .claude/scripts/auto-contribute.js \"$FILE_PATH\""
      }]
    }]
  }
}
```

```
프로젝트 A에서 새 Card 컴포넌트 생성
           ↓
PostToolUse Hook 감지 (Write 도구 사용)
           ↓
auto-contribute.js 실행
           ↓
GitHub API로 design-system에 커밋
           ↓
다른 프로젝트에서 npm update로 사용 가능
```

### 8.3 충돌 방지 전략

| 시나리오 | 해결책 |
|----------|--------|
| 동시 수정 | 마지막 커밋 우선 (Last Write Wins) |
| 토큰 미사용 | Generation Protocol에서 사전 차단 |
| 중복 컴포넌트 | 기존 컴포넌트 검색 후 생성 권장 |
| Breaking Change | Major 버전은 auto-merge 제외, 수동 검토 |

---

## 9장. 향후 계획

**제목**: 지속 가능한 확장

### 9.1 컴포넌트 확장 로드맵

| Phase | 컴포넌트 | 상태 |
|-------|----------|------|
| v0 (현재) | Button, Input | ✅ 완료 |
| v1 | Card, Modal, Toast | 🔜 예정 |
| v2 | Table, Form, Tabs | 📋 계획 |
| v3 | Chart, Calendar | 💭 검토 |

### 9.2 품질 관리 강화

**자동 검증 파이프라인 (계획)**:
```
컴포넌트 생성 요청
       ↓
┌──────────────────────────────┐
│ Pre-commit Checks            │
├──────────────────────────────┤
│ 1. 토큰 사용 검사 (ESLint)   │
│ 2. 접근성 검사 (axe-core)    │
│ 3. 타입 체크 (TypeScript)    │
│ 4. 시각적 회귀 (Chromatic)   │
└──────────────────────────────┘
       ↓
모두 통과 시에만 커밋 허용
```

### 9.3 거버넌스 체계

**컴포넌트 승인 프로세스 (계획)**:
```
1. 프로젝트에서 컴포넌트 생성
       ↓
2. Hook이 design-system에 PR 생성 (자동 커밋 대신)
       ↓
3. 디자인 시스템 관리자 코드 리뷰
       ↓
4. 승인 시 머지 → 전체 배포
   거부 시 피드백 → 수정 요청
```

**왜 PR 방식으로 전환하나?**
- 현재: 자동 커밋으로 빠르지만 품질 통제 어려움
- 개선: PR 리뷰로 품질 보장, 단 속도는 감소
- 트레이드오프: 초기에는 속도 우선, 안정화 후 품질 우선

### 9.4 문서 자동화

**컴포넌트 문서 자동 생성 (계획)**:
```tsx
// 컴포넌트에 JSDoc 작성
/**
 * @component Button
 * @description 기본 버튼 컴포넌트
 * @example <Button variant="primary">Click</Button>
 */
export function Button({ ... }) { }
```

```
↓ 빌드 시 자동 추출 ↓
```

```
문서 사이트에 Props 테이블 + 예제 자동 생성
```

---

## 포트폴리오 구성 요약

| 장 | 제목 | 핵심 메시지 |
|----|------|-------------|
| 1 | 커버 | 프로젝트 한 줄 요약 |
| 2 | 문제 정의 | 왜 이 프로젝트가 필요했나 |
| 3 | 솔루션 개요 | 어떻게 해결했나 (전체 그림) |
| 4 | 핵심 인프라 | 토큰 + 컴포넌트 배포 체계 |
| 5 | 자동화 시스템 | 설정/업데이트 자동화 |
| 6 | 품질 보장 | Generation Protocol |
| 7 | 문서 사이트 | 각 페이지의 존재 이유 |
| 8 | 양방향 동기화 | 데이터 흐름 + 충돌 방지 |
| 9 | 향후 계획 | 지속 가능한 확장 방향 |

---

*Created: 2026-01-22*
