# /setup-design

프로젝트에 @geniefy/ui 디자인 시스템을 자동 설정합니다.

## 실행 단계

### Step 1: 프로젝트 타입 감지
- package.json 존재 여부 확인
- Node.js 프로젝트인지 HTML/CSS 프로젝트인지 구분

### Step 2: npm 패키지 설치 (Node.js 프로젝트)
package.json이 있으면 실행:
```bash
npm install @geniefy/ui
```

### Step 3: CLAUDE.md 설정
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
        "command": "cat ~/.claude/skills/design-rules.md"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "if [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"components/\"* ]]; then ~/.claude/scripts/auto-contribute.sh \"$CLAUDE_TOOL_ARG_file_path\"; fi"
      }
    ]
  }
}
```

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

### Step 7: 완료 메시지

```
✅ @geniefy/ui 디자인 시스템 설정 완료!

설치된 항목:
- npm 패키지: @geniefy/ui
- CLAUDE.md: 디자인 규칙 추가됨
- Hook: UI 생성 시 자동 규칙 적용
- Hook: 컴포넌트 생성 시 자동 기여
- Dependabot: 자동 업데이트 + 자동 머지

양방향 동기화:
- 업로드: components/ 폴더에 생성 → 자동 커밋
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
