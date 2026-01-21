# /setup-design 명령어 구현 계획

- **작성일**: 2026-01-20
- **상태**: 📋 Planning

---

## 1. 배경 및 문제 정의

### 현재 상황
design-system 저장소는 다음과 같이 배포됨:
- `tokens.css` → CDN (jsDelivr)
- `components/` → npm 패키지 (@geniefy/ui)
- `design-rules.md` → CDN
- `docs/` → 문서 사이트 (Vercel)

### 문제점
- 새 프로젝트에서 디자인 시스템을 적용하려면 **수동 작업이 많음**:
  1. npm install @geniefy/ui
  2. tokens.css import 추가
  3. CLAUDE.md에 design-rules 참조 추가
  4. 자동 업데이트 설정 (Dependabot)
- 설정을 잘못하거나 빠뜨리면 일관성 없는 UI 발생
- 새 개발자가 합류할 때마다 설정 방법 공유 필요

### 요구사항
1. **원클릭 설정**: `/setup-design` 한 번으로 모든 설정 완료
2. **자동 규칙 적용**: UI 생성 시 design-rules가 자동 적용되도록
3. **자동 업데이트**: 새 버전 배포 시 자동 PR 생성
4. **선택적 기여**: 새 컴포넌트 생성 시 중앙 저장소에 자동 커밋 (선택)

---

## 2. 검토한 옵션

### 옵션 1: npm postinstall 스크립트
npm install 시 자동으로 설정 스크립트 실행

**장점:**
- npm install만 하면 자동 설정
- 별도 명령어 불필요

**단점:**
- postinstall은 보안 이슈로 기피됨
- CLAUDE.md 수정 같은 작업은 적절하지 않음
- 사용자 동의 없이 파일 수정

### 옵션 2: CLI 명령어 (npx geniefy-ui init)
npm 패키지에 CLI 명령어 포함

**장점:**
- 표준적인 방식
- CI/CD에서도 사용 가능

**단점:**
- npm 패키지에 CLI 번들링 필요
- Claude Code 환경에서 비직관적

### 옵션 3: Claude Code Command ✅ 선택
`.claude/commands/setup-design.md`로 명령어 정의

**장점:**
- Claude Code 사용자에게 가장 자연스러움
- `/setup-design` 한 번으로 완료
- 대화형으로 옵션 선택 가능
- Hook, Skill 연동 자연스러움

**단점:**
- Claude Code 사용자만 가능 (→ npm/CDN은 별도 문서로 안내)

---

## 3. 선택: Claude Code Command

### 결정 이유
1. **타겟 사용자**: 조직 내 개발자 대부분이 Claude Code 사용
2. **통합 경험**: 설치 → 규칙 적용 → 자동 기여까지 한 번에
3. **유연성**: 옵션 선택, 대화형 진행 가능
4. **확장성**: Hook, Skill과 자연스럽게 연동

---

## 4. 명령어 동작 흐름

```
사용자: /setup-design

1. 환경 확인
   ├─ package.json 존재 여부
   ├─ Next.js / React 프로젝트 감지
   └─ 기존 @geniefy/ui 설치 여부

2. 패키지 설치
   └─ npm install @geniefy/ui

3. 토큰 설정
   ├─ React/Next.js → import '@geniefy/ui/tokens.css' 추가
   └─ 순수 HTML/CSS → CDN 링크 안내

4. CLAUDE.md 업데이트
   └─ design-rules 참조 추가

5. 자동 업데이트 설정 (선택)
   └─ .github/dependabot.yml 생성

6. 자동 기여 Hook 설정 (선택)
   ├─ .claude/hooks/auto-contribute.js 생성
   └─ settings.json 업데이트

7. 완료 메시지
   └─ 다음 단계 안내
```

---

## 5. 파일 구조

```
design-system/
├── .claude/
│   ├── commands/
│   │   └── setup-design.md      # 📌 설치 명령어 (이번 구현)
│   ├── skills/
│   │   └── design-rules.md      # UI 생성 규칙 (Phase 1-B)
│   ├── hooks/
│   │   └── auto-contribute.js   # 자동 기여 (Phase 2)
│   └── scripts/
│       └── contribute.sh        # 기여 스크립트 (Phase 3)
└── ...
```

### 사용자 프로젝트에 생성되는 파일

```
user-project/
├── CLAUDE.md                    # (수정) design-rules 참조 추가
├── package.json                 # (수정) @geniefy/ui 의존성 추가
├── .github/
│   └── dependabot.yml           # (생성) 자동 업데이트
└── .claude/
    └── settings.local.json      # (수정) hook/skill 등록
```

---

## 6. 명령어 내용

### `.claude/commands/setup-design.md`

```markdown
# /setup-design

프로젝트에 @geniefy/ui 디자인 시스템을 설정합니다.

## 실행 내용

### 1. 패키지 설치
```bash
npm install @geniefy/ui
```

### 2. 토큰 import 안내
layout.tsx 또는 진입점에 추가:
```tsx
import '@geniefy/ui/tokens.css';
```

### 3. CLAUDE.md 업데이트
다음 내용을 CLAUDE.md에 추가:
```markdown
## 디자인 시스템

이 프로젝트는 @geniefy/ui 디자인 시스템을 사용합니다.

- 토큰: https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css
- 규칙: https://cdn.jsdelivr.net/gh/geniefy/design-system/design-rules.md
- 문서: https://design.geniefy.ai

UI 생성 시 반드시 design-rules.md의 규칙을 따르세요.
```

### 4. Dependabot 설정 (선택)
.github/dependabot.yml 생성:
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      - dependency-name: "@geniefy/ui"
```

### 5. 완료
설정이 완료되었습니다. 이제 컴포넌트를 사용할 수 있습니다:
```tsx
import { Button, Input } from '@geniefy/ui';
```
```

---

## 7. Skill 연동

### design-rules Skill (Phase 1-B에서 구현)

**트리거 조건:**
- "UI", "컴포넌트", "버튼", "폼" 등 키워드 포함 시
- `UserPromptSubmit` hook으로 감지

**역할:**
- tokens.css 변수만 사용하도록 강제
- 하드코딩 px, #hex 금지
- Generation Protocol 4단계 적용

---

## 8. 구현 단계

### Phase 1-A: Command 생성 (현재)
- [ ] `.claude/commands/setup-design.md` 작성
- [ ] 기본 설치 흐름 구현
- [ ] CLAUDE.md 업데이트 로직
- [ ] Dependabot 설정 생성

### Phase 1-B: Skill 생성
- [ ] `.claude/skills/design-rules.md` 작성
- [ ] Hook 트리거 조건 정의
- [ ] Generation Protocol 포함

### Phase 2: Hook 생성
- [ ] `auto-contribute.js` 작성
- [ ] PostToolUse 매처 설정
- [ ] GitHub API 연동

### Phase 3: 자동 기여 스크립트
- [ ] `contribute.sh` 작성
- [ ] 충돌 처리 로직
- [ ] 에러 핸들링

---

## 9. 검증 방법

1. **기본 설치 테스트**
   - 빈 Next.js 프로젝트 생성
   - `/setup-design` 실행
   - @geniefy/ui 설치 확인
   - CLAUDE.md 업데이트 확인

2. **토큰 적용 테스트**
   - Button 컴포넌트 렌더링
   - CSS 변수 적용 확인

3. **규칙 적용 테스트**
   - "Card 컴포넌트 만들어줘" 요청
   - design-rules 따르는지 확인
   - 하드코딩 px 있으면 실패

---

## 10. 고려사항

### 보안
- GITHUB_TOKEN은 환경변수로 관리
- 자동 기여는 옵트인 (명시적 동의 필요)

### 호환성
- npm/yarn/pnpm 자동 감지
- Next.js, Create React App, Vite 지원

### 에러 처리
- package.json 없으면 에러 메시지
- 이미 설치된 경우 스킵 옵션

---

## 11. 참고

- [Claude Code Commands 문서](https://docs.anthropic.com/claude-code/commands)
- [Claude Code Skills 문서](https://docs.anthropic.com/claude-code/skills)
- [design-rules.md](../../design-rules.md) - 기존 디자인 규칙
