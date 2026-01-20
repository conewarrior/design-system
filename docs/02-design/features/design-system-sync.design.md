# Design System 양방향 동기화 - 상세 설계

- **작성일**: 2026-01-20
- **상태**: 📐 Design
- **관련 Plan**: [requirements.md](../../01-plan/requirements.md)

---

## 1. 개요

### 1.1 목적
조직 전체가 `/setup-design` 명령어 하나로 디자인 시스템을 설치하고, 새 컴포넌트 생성 시 자동으로 중앙 저장소에 반영되는 시스템

### 1.2 구성 요소

| 요소 | 타입 | 역할 |
|------|------|------|
| `/setup-design` | Command | 프로젝트 초기 설정 (npm 설치 + 규칙 + Hook) |
| `design-rules` | Skill | UI 생성 시 토큰 규칙 자동 적용 |
| `auto-contribute` | Hook | 컴포넌트 생성 시 중앙 저장소에 자동 커밋 |

---

## 2. `/setup-design` Command 설계

### 2.1 트리거
```
사용자 입력: /setup-design
```

### 2.2 실행 순서

```
┌─────────────────────────────────────────────────────────┐
│ /setup-design 실행                                      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Step 1: 프로젝트 타입 감지                               │
│ - package.json 존재 여부                                │
│ - React/Next.js/순수 HTML 구분                          │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Step 2: npm 패키지 설치 (Node.js 프로젝트인 경우)        │
│ Bash: npm install @geniefy/ui                           │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Step 3: CLAUDE.md 설정                                  │
│ - 기존 CLAUDE.md 읽기 (없으면 생성)                      │
│ - design-rules skill 참조 추가                          │
│ - tokens.css CDN 링크 추가                              │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Step 4: Hook 설치                                       │
│ - .claude/settings.local.json 생성/수정                 │
│ - auto-contribute hook 등록                             │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Step 5: GitHub 토큰 설정 안내                            │
│ - GITHUB_TOKEN 환경변수 확인                             │
│ - 없으면 설정 방법 안내                                  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ 완료 메시지 출력                                         │
└─────────────────────────────────────────────────────────┘
```

### 2.3 생성/수정 파일

| 파일 | 동작 | 내용 |
|------|------|------|
| `CLAUDE.md` | 수정/생성 | design-rules 참조, CDN 링크 추가 |
| `.claude/settings.local.json` | 생성 | hook 등록 |
| `package.json` | 수정 | @geniefy/ui 의존성 추가 (npm install 시) |

### 2.4 CLAUDE.md 추가 내용

```markdown
## 디자인 시스템

이 프로젝트는 @geniefy/ui 디자인 시스템을 사용합니다.

### 토큰
- CDN: https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css
- 모든 색상, 간격, radius는 tokens.css의 CSS 변수 사용 필수

### 규칙
UI 생성 시 design-rules skill이 자동 적용됩니다:
- 하드코딩 색상 금지 (#fff, rgb 등)
- 8px 단위 간격만 사용
- 컴포넌트 수 최대 7개

### 컴포넌트
새 컴포넌트 생성 시 자동으로 design-system 저장소에 기여됩니다.
```

---

## 3. `design-rules` Skill 설계

### 3.1 트리거 조건

```json
{
  "hooks": {
    "UserPromptSubmit": [{
      "matcher": "UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS",
      "command": ".claude/skills/design-rules.md"
    }]
  }
}
```

### 3.2 Skill 내용 (기존 design-rules.md 기반)

```markdown
# Design Rules Skill

## 트리거
UI/컴포넌트 관련 요청 시 자동 적용

## 규칙

### 필수 제약
1. 색상: tokens.css 변수만 사용 (하드코딩 금지)
2. 간격: 8px 단위 토큰만 사용
3. Radius: --radius-* 토큰만 사용
4. 컴포넌트 수: 화면당 최대 7개
5. 색상 수: 배경/강조 최대 3개

### Generation Protocol
1. 목적 파악
2. 토큰/컴포넌트 선택
3. 검증 (제약 준수 확인)
4. 위반 시 거부 및 수정

### 토큰 참조
- CDN: https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css
```

---

## 4. `auto-contribute` Hook 설계

### 4.1 트리거 조건

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "condition": "filePath.includes('components/')",
      "command": ".claude/scripts/auto-contribute.sh $FILE_PATH"
    }]
  }
}
```

### 4.2 동작 흐름

```
┌─────────────────────────────────────────────────────────┐
│ Write/Edit 도구로 components/ 폴더에 파일 생성/수정      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Hook 트리거: auto-contribute.sh 실행                    │
│ - 파일 경로 전달                                        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ GitHub API로 design-system 저장소에 커밋                │
│ - PUT /repos/geniefy/design-system/contents/{path}     │
│ - GITHUB_TOKEN 사용                                    │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ 결과 출력                                               │
│ - 성공: "✅ design-system에 기여됨: {path}"             │
│ - 실패: "❌ 기여 실패: {error}"                         │
└─────────────────────────────────────────────────────────┘
```

### 4.3 auto-contribute.sh 스크립트

```bash
#!/bin/bash
# 사용법: auto-contribute.sh <file_path>

FILE_PATH=$1
REPO="geniefy/design-system"
BRANCH="main"

# 파일 내용 읽기
CONTENT=$(base64 < "$FILE_PATH")

# GitHub API로 커밋
curl -X PUT \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/contents/$FILE_PATH" \
  -d "{
    \"message\": \"feat: Add/Update $FILE_PATH from $(hostname)\",
    \"content\": \"$CONTENT\",
    \"branch\": \"$BRANCH\"
  }"
```

---

## 5. 파일 구조

### 5.1 design-system 저장소 (배포 후)

```
design-system/
├── .claude/
│   ├── commands/
│   │   └── setup-design.md      # /setup-design 명령어
│   ├── skills/
│   │   └── design-rules.md      # UI 규칙 skill
│   └── scripts/
│       └── auto-contribute.sh   # 자동 커밋 스크립트
├── components/                   # React 컴포넌트
├── tokens.css                    # 디자인 토큰
├── design-rules.md               # 규칙 문서 (CDN용)
├── docs/                         # 문서 사이트
└── package.json                  # npm 패키지
```

### 5.2 사용자 프로젝트 (/setup-design 실행 후)

```
user-project/
├── .claude/
│   └── settings.local.json      # hook 설정
├── CLAUDE.md                     # 규칙 참조 추가됨
├── node_modules/
│   └── @geniefy/ui/              # npm 패키지 설치됨
└── package.json                  # 의존성 추가됨
```

---

## 6. 인터페이스

### 6.1 환경 변수

| 변수 | 필수 | 용도 |
|------|------|------|
| `GITHUB_TOKEN` | Yes | design-system 저장소 커밋 권한 |

### 6.2 npm 패키지 배포 내용

```json
{
  "files": [
    "dist",
    "tokens.css",
    "design-rules.md",
    ".claude/commands/setup-design.md",
    ".claude/skills/design-rules.md",
    ".claude/scripts/auto-contribute.sh"
  ]
}
```

---

## 7. 에러 처리

| 상황 | 처리 |
|------|------|
| package.json 없음 | CDN만 설정, npm 설치 스킵 |
| GITHUB_TOKEN 없음 | 경고 + 설정 방법 안내, Hook 비활성화 |
| GitHub API 실패 | 에러 메시지 출력, 로컬 작업은 계속 |
| 파일 충돌 | 마지막 커밋 우선 (덮어씀) |

---

## 8. 검증 방법

1. **Command 테스트**
   - 빈 프로젝트에서 `/setup-design` 실행
   - CLAUDE.md, settings.local.json 생성 확인
   - npm install 실행 확인

2. **Skill 테스트**
   - "버튼 만들어줘" 요청
   - tokens.css 토큰 사용 확인
   - 하드코딩 색상 거부 확인

3. **Hook 테스트**
   - components/ 폴더에 파일 생성
   - design-system 저장소에 커밋 확인
   - 다른 프로젝트에서 해당 컴포넌트 사용 가능 확인

---

## 9. 자동 업데이트 설계 (Dependabot + 자동 머지)

### 9.1 목적

컴포넌트 업로드(auto-contribute)는 자동화되었지만, 다운로드(npm update)는 수동이었음.
Dependabot + 자동 머지로 **양방향 모두 자동화**.

```
        자동 ✅                    자동 ✅
┌──────────────────┐       ┌──────────────────┐
│ 컴포넌트 업로드   │       │ 컴포넌트 다운로드 │
│                  │       │                  │
│ 개발자 → 중앙저장소│       │ 중앙저장소 → 개발자│
│  (auto-commit)   │       │  (Dependabot)    │
└──────────────────┘       └──────────────────┘
```

### 9.2 동작 흐름

```
@geniefy/ui@0.0.2 배포됨
         │
         ▼
┌─────────────────────────────────┐
│ 🤖 Dependabot (매일 확인)        │
│    "새 버전 발견!"               │
│    PR 자동 생성                  │
└─────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│ 🔄 GitHub Actions               │
│    1. 빌드 테스트                │
│    2. @geniefy/ui 업데이트 PR 확인│
│    3. 자동 머지 실행             │
└─────────────────────────────────┘
         │
         ▼ (CI 통과 시)
┌─────────────────────────────────┐
│ ✅ 자동 머지 완료                │
│    개발자 개입 없이 최신 버전     │
└─────────────────────────────────┘
```

### 9.3 생성 파일

`/setup-design` 실행 시 다음 파일들도 생성:

#### .github/dependabot.yml

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

#### .github/workflows/dependabot-auto-merge.yml

```yaml
name: Auto-merge Dependabot PRs

on:
  pull_request:

permissions:
  contents: write
  pull-requests: write

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'

    steps:
      - name: Check if @geniefy/ui update
        id: check
        run: |
          if [[ "${{ github.event.pull_request.title }}" == *"@geniefy/ui"* ]]; then
            echo "match=true" >> $GITHUB_OUTPUT
          fi

      - name: Enable auto-merge
        if: steps.check.outputs.match == 'true'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 9.4 사용자 프로젝트 구조 (업데이트)

```
user-project/
├── .claude/
│   └── settings.local.json      # hook 설정
├── .github/
│   ├── dependabot.yml           # 자동 업데이트 설정 ← NEW
│   └── workflows/
│       └── dependabot-auto-merge.yml  # 자동 머지 ← NEW
├── CLAUDE.md                     # 규칙 참조
└── package.json                  # @geniefy/ui 의존성
```

### 9.5 안전장치

| 조건 | 설명 |
|------|------|
| Dependabot PR만 | 사람이 만든 PR은 자동 머지 안 됨 |
| @geniefy/ui만 | 다른 패키지 업데이트는 수동 |
| CI 통과 필수 | 테스트 실패 시 머지 안 됨 |

---

*Created: 2026-01-20*
*Updated: 2026-01-20 - 자동 업데이트(Dependabot) 설계 추가*
