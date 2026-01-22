# /setup-design

프로젝트에 @geniefy/ui 디자인 시스템을 자동 설정합니다.

**한 번 실행으로 완료되는 항목:**
- npm 패키지 설치
- design-rules.md 복사 (양방향 동기화 대상)
- CLAUDE.md에 디자인 규칙 추가
- UI 생성 시 규칙 자동 적용 (Hook)
- Dependabot 자동 업데이트 설정

---

## 실행 단계

### Step 1: 프로젝트 타입 감지
- package.json 존재 여부 확인
- Node.js 프로젝트인지 HTML/CSS 프로젝트인지 구분

### Step 2: npm 패키지 설치 (Node.js 프로젝트)
package.json이 있으면 실행:
```bash
npm install @geniefy/ui
```

### Step 2.5: 토큰 import 추가

**Next.js 프로젝트** (`app/layout.tsx`에 추가):
```tsx
import '@geniefy/ui/tokens.css';
```

**React (CRA/Vite)** (`src/index.tsx` 또는 `src/main.tsx`에 추가):
```tsx
import '@geniefy/ui/tokens.css';
```

**HTML/CSS 프로젝트** (`<head>`에 추가):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css">
```

### Step 3: design-rules.md 복사
npm 패키지에서 프로젝트로 design-rules.md를 복사합니다.
이 복사본이 양방향 동기화 대상이 됩니다.

```bash
mkdir -p .claude/skills
cp node_modules/@geniefy/ui/.claude/skills/design-rules.md .claude/skills/
```

### Step 3.5: CLAUDE.md 설정
기존 CLAUDE.md를 읽고, 없으면 새로 생성합니다.
다음 내용을 CLAUDE.md에 추가합니다:

```markdown
## 디자인 시스템

이 프로젝트는 @geniefy/ui 디자인 시스템을 사용합니다.

### 토큰
- CDN: https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css
- 모든 색상, 간격, radius는 tokens.css의 CSS 변수 사용 필수

### 규칙 (자동 적용)
UI 생성 시 design-rules skill이 자동 적용됩니다:
- 하드코딩 색상 금지 (#fff, rgb 등) → var(--color-*) 사용
- 8px 단위 간격만 사용 → var(--spacing-*) 사용
- radius는 토큰만 사용 → var(--radius-*) 사용
- 화면당 컴포넌트 최대 7개
- 배경/강조 색상 최대 3개

### 컴포넌트 기여
components/ 폴더에 새 컴포넌트 생성 시 자동으로 design-system 저장소에 기여됩니다.
```

### Step 4: Hook 설정
`.claude/settings.local.json` 파일을 생성/수정하여 다음 hook을 등록합니다:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS|디자인",
        "command": "cat .claude/skills/design-rules.md"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "if [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"components/\"* ]] || [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"design-rules.md\"* ]]; then .claude/scripts/auto-contribute.sh \"$CLAUDE_TOOL_ARG_file_path\"; fi"
      }
    ]
  }
}
```

**Hook 설명:**
- `UserPromptSubmit`: UI 관련 키워드 입력 시 프로젝트 내 design-rules.md 로딩
- `PostToolUse`: components/ 또는 design-rules.md 변경 시 자동 기여

### Step 5: GitHub 토큰 확인
GITHUB_TOKEN 환경변수가 설정되어 있는지 확인합니다.
없으면 설정 방법을 안내합니다:

```
⚠️ GITHUB_TOKEN이 설정되지 않았습니다.

자동 기여 기능을 사용하려면 GitHub Personal Access Token을 설정하세요:

1. https://github.com/settings/tokens 에서 토큰 생성
2. 권한: repo (전체)
3. 환경변수 설정:
   export GITHUB_TOKEN="your_token_here"

   또는 ~/.zshrc에 추가:
   echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.zshrc
```

### Step 6: 자동 업데이트 설정 (Dependabot)
`.github/` 폴더에 자동 업데이트 설정 파일들을 생성합니다.

```bash
# 디렉토리 생성
mkdir -p .github/workflows
```

#### .github/dependabot.yml
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      timezone: "Asia/Seoul"
    allow:
      - dependency-name: "@geniefy/ui"
    commit-message:
      prefix: "chore(deps)"
      include: "scope"
    labels:
      - "dependencies"
      - "auto-merge"
    open-pull-requests-limit: 5
```

#### .github/workflows/dependabot-auto-merge.yml
```yaml
name: Auto-merge Dependabot PRs

on:
  pull_request:
    types: [opened, synchronize, reopened]

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
          TITLE="${{ github.event.pull_request.title }}"
          if [[ "$TITLE" == *"@geniefy/ui"* ]]; then
            echo "is_geniefy_ui=true" >> $GITHUB_OUTPUT
          else
            echo "is_geniefy_ui=false" >> $GITHUB_OUTPUT
          fi

      - name: Check for major version bump
        id: major
        if: steps.check.outputs.is_geniefy_ui == 'true'
        run: |
          TITLE="${{ github.event.pull_request.title }}"
          if [[ "$TITLE" =~ from\ ([0-9]+)\.[0-9]+\.[0-9]+\ to\ ([0-9]+)\.[0-9]+\.[0-9]+ ]]; then
            FROM_MAJOR="${BASH_REMATCH[1]}"
            TO_MAJOR="${BASH_REMATCH[2]}"
            if [[ "$FROM_MAJOR" != "$TO_MAJOR" ]]; then
              echo "is_major=true" >> $GITHUB_OUTPUT
            else
              echo "is_major=false" >> $GITHUB_OUTPUT
            fi
          else
            echo "is_major=false" >> $GITHUB_OUTPUT
          fi

      - name: Wait for CI checks
        if: steps.check.outputs.is_geniefy_ui == 'true' && steps.major.outputs.is_major != 'true'
        uses: lewagon/wait-on-check-action@v1.3.4
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          wait-interval: 10
          running-workflow-name: 'Auto-merge Dependabot PRs'

      - name: Enable auto-merge
        if: steps.check.outputs.is_geniefy_ui == 'true' && steps.major.outputs.is_major != 'true'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Comment on major update
        if: steps.major.outputs.is_major == 'true'
        run: |
          gh pr comment "$PR_URL" --body "## Major 버전 업데이트

          Breaking change가 포함되어 있을 수 있습니다.
          수동 리뷰 후 머지해 주세요.

          - [CHANGELOG 확인](https://github.com/geniefy/design-system/blob/main/CHANGELOG.md)"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Step 7: 완료 메시지

```
✅ @geniefy/ui 디자인 시스템 설정 완료!

설치된 항목:
- npm 패키지: @geniefy/ui
- design-rules.md: .claude/skills/에 복사됨
- CLAUDE.md: 디자인 규칙 추가됨
- Hook: UI 생성 시 자동 규칙 적용
- Hook: 컴포넌트/규칙 변경 시 자동 기여
- Dependabot: 자동 업데이트 + 자동 머지

양방향 동기화:
- 업로드: components/ 또는 design-rules.md 변경 → 자동 커밋
- 다운로드: 새 버전 배포 → Dependabot PR → 자동 머지

토큰 참조:
- CDN: https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css
- 문서: https://design.geniefy.ai (또는 localhost:3333)
```

## 에러 처리

| 상황 | 처리 |
|------|------|
| package.json 없음 | npm 설치 스킵, CDN만 설정 |
| npm install 실패 | 에러 출력, 나머지 단계 계속 진행 |
| GITHUB_TOKEN 없음 | 경고 출력, 자동 기여 비활성화 안내 |
| .github 폴더 없음 | 폴더 생성 후 파일 생성 |
| GitHub 저장소 아님 | Dependabot 설정 스킵, 안내 메시지 출력 |
