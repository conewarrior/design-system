# Auto-Update - Design Document

- **Feature**: auto-update
- **Created**: 2026-01-21
- **Status**: ✅ Done
- **Plan**: [auto-update.plan.md](../../01-plan/features/auto-update.plan.md)

---

## 1. 개요

@geniefy/ui 패키지의 자동 업데이트 시스템 설계. Dependabot을 활용하여 새 버전 감지 → PR 생성 → CI 통과 → 자동 머지까지 완전 자동화한다.

---

## 2. 아키텍처

### 2.1 전체 흐름

```
┌─────────────────────────────────────────────────────────────────┐
│                    design-system (중앙 저장소)                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  npm publish (새 버전 배포)                              │   │
│  │  @geniefy/ui@0.0.2 → @geniefy/ui@0.0.3                  │   │
│  └──────────────────────────┬──────────────────────────────┘   │
└─────────────────────────────│──────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         npm Registry                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  @geniefy/ui                                            │   │
│  │  latest: 0.0.3                                          │   │
│  └──────────────────────────┬──────────────────────────────┘   │
└─────────────────────────────│──────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   프로젝트 A     │ │   프로젝트 B     │ │   프로젝트 C     │
│                 │ │                 │ │                 │
│ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │
│ │ Dependabot  │ │ │ │ Dependabot  │ │ │ │ Dependabot  │ │
│ │ 버전 감지   │ │ │ │ 버전 감지   │ │ │ │ 버전 감지   │ │
│ └──────┬──────┘ │ │ └──────┬──────┘ │ │ └──────┬──────┘ │
│        ▼        │ │        ▼        │ │        ▼        │
│ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │
│ │ PR 자동 생성│ │ │ │ PR 자동 생성│ │ │ │ PR 자동 생성│ │
│ └──────┬──────┘ │ │ └──────┬──────┘ │ │ └──────┬──────┘ │
│        ▼        │ │        ▼        │ │        ▼        │
│ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │
│ │ CI 테스트   │ │ │ │ CI 테스트   │ │ │ │ CI 테스트   │ │
│ └──────┬──────┘ │ │ └──────┬──────┘ │ │ └──────┬──────┘ │
│        ▼        │ │        ▼        │ │        ▼        │
│ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │
│ │ 자동 머지   │ │ │ │ 자동 머지   │ │ │ │ 자동 머지   │ │
│ └─────────────┘ │ │ └─────────────┘ │ │ └─────────────┘ │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### 2.2 상태 다이어그램

```
┌──────────┐     버전 차이 감지      ┌──────────────┐
│  Idle    │ ──────────────────────▶ │  PR Created  │
│ (대기중) │                         │  (PR 생성됨) │
└──────────┘                         └──────┬───────┘
     ▲                                      │
     │                                      ▼
     │                              ┌──────────────┐
     │                              │  CI Running  │
     │                              │  (CI 실행중) │
     │                              └──────┬───────┘
     │                                     │
     │               ┌─────────────────────┴─────────────────────┐
     │               │                                           │
     │               ▼                                           ▼
     │      ┌──────────────┐                            ┌──────────────┐
     │      │  CI Passed   │                            │  CI Failed   │
     │      │  (CI 통과)   │                            │  (CI 실패)   │
     │      └──────┬───────┘                            └──────┬───────┘
     │             │                                           │
     │             ▼                                           │
     │      ┌──────────────┐                                   │
     │      │ Auto Merge   │                                   │
     │      │ (자동 머지)  │                                   │
     │      └──────┬───────┘                                   │
     │             │                                           │
     └─────────────┴───────────────────────────────────────────┘
                         (다음 사이클)
```

---

## 3. 파일 설계

### 3.1 Dependabot 설정

**파일:** `.github/dependabot.yml`

```yaml
version: 2
updates:
  # npm 패키지 업데이트
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      timezone: "Asia/Seoul"

    # @geniefy/ui만 자동 업데이트
    allow:
      - dependency-name: "@geniefy/ui"

    # 커밋 메시지 형식
    commit-message:
      prefix: "chore(deps)"
      include: "scope"

    # PR 라벨
    labels:
      - "dependencies"
      - "auto-merge"

    # PR 제한
    open-pull-requests-limit: 5

    # 리뷰어 (선택)
    # reviewers:
    #   - "team-slug"
```

**설정 설명:**

| 필드 | 값 | 설명 |
|------|-----|------|
| `interval` | daily | 매일 체크 |
| `time` | 09:00 | 오전 9시 (KST) |
| `allow` | @geniefy/ui | 이 패키지만 허용 |
| `prefix` | chore(deps) | 커밋 메시지 접두사 |

### 3.2 자동 머지 Workflow

**파일:** `.github/workflows/dependabot-auto-merge.yml`

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
    # Dependabot이 생성한 PR만 처리
    if: github.actor == 'dependabot[bot]'

    steps:
      # 1. @geniefy/ui 업데이트인지 확인
      - name: Check if @geniefy/ui update
        id: check
        run: |
          TITLE="${{ github.event.pull_request.title }}"
          if [[ "$TITLE" == *"@geniefy/ui"* ]]; then
            echo "is_geniefy_ui=true" >> $GITHUB_OUTPUT
            echo "✅ @geniefy/ui 업데이트 PR 감지"
          else
            echo "is_geniefy_ui=false" >> $GITHUB_OUTPUT
            echo "⏭️ @geniefy/ui가 아닌 업데이트, 스킵"
          fi

      # 2. Major 버전 업데이트 감지 (Breaking Change)
      - name: Check for major version bump
        id: major
        if: steps.check.outputs.is_geniefy_ui == 'true'
        run: |
          TITLE="${{ github.event.pull_request.title }}"
          # "from 1.x.x to 2.x.x" 패턴 감지
          if [[ "$TITLE" =~ from\ ([0-9]+)\.[0-9]+\.[0-9]+\ to\ ([0-9]+)\.[0-9]+\.[0-9]+ ]]; then
            FROM_MAJOR="${BASH_REMATCH[1]}"
            TO_MAJOR="${BASH_REMATCH[2]}"
            if [[ "$FROM_MAJOR" != "$TO_MAJOR" ]]; then
              echo "is_major=true" >> $GITHUB_OUTPUT
              echo "⚠️ Major 버전 업데이트 감지: $FROM_MAJOR → $TO_MAJOR"
            else
              echo "is_major=false" >> $GITHUB_OUTPUT
            fi
          else
            echo "is_major=false" >> $GITHUB_OUTPUT
          fi

      # 3. CI 완료 대기
      - name: Wait for CI checks
        if: steps.check.outputs.is_geniefy_ui == 'true' && steps.major.outputs.is_major != 'true'
        uses: lewagon/wait-on-check-action@v1.3.4
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          wait-interval: 10
          running-workflow-name: 'Auto-merge Dependabot PRs'

      # 4. 자동 머지 활성화
      - name: Enable auto-merge
        if: steps.check.outputs.is_geniefy_ui == 'true' && steps.major.outputs.is_major != 'true'
        run: |
          gh pr merge --auto --squash "$PR_URL"
          echo "✅ 자동 머지 활성화됨"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      # 5. Major 업데이트 시 알림
      - name: Comment on major update
        if: steps.major.outputs.is_major == 'true'
        run: |
          gh pr comment "$PR_URL" --body "⚠️ **Major 버전 업데이트입니다.**

          Breaking change가 포함되어 있을 수 있습니다.
          수동 리뷰 후 머지해 주세요.

          - [CHANGELOG 확인](https://github.com/geniefy/design-system/blob/main/CHANGELOG.md)
          - [마이그레이션 가이드](https://design.geniefy.ai/migration)"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 4. /setup-design 연동

### 4.1 Command 수정

`/setup-design` 명령어의 Step 6에서 위 파일들을 생성합니다.

**수정 위치:** `.claude/commands/setup-design.md`

```markdown
### Step 6: 자동 업데이트 설정 (Dependabot)

`.github/` 폴더에 자동 업데이트 설정 파일들을 생성합니다.

1. `.github/dependabot.yml` - 버전 감지 설정
2. `.github/workflows/dependabot-auto-merge.yml` - 자동 머지 워크플로우

생성 전 `.github/` 폴더 존재 여부를 확인하고, 없으면 생성합니다.
기존 파일이 있으면 덮어쓰기 여부를 사용자에게 확인합니다.
```

### 4.2 생성 로직

```bash
# .github 폴더 생성
mkdir -p .github/workflows

# dependabot.yml 생성
cat > .github/dependabot.yml << 'EOF'
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      - dependency-name: "@geniefy/ui"
    commit-message:
      prefix: "chore(deps)"
    labels:
      - "dependencies"
      - "auto-merge"
EOF

# auto-merge workflow 생성
cat > .github/workflows/dependabot-auto-merge.yml << 'EOF'
# (위 workflow 내용)
EOF
```

---

## 5. 에러 처리

### 5.1 CI 실패 시

| 상황 | 동작 |
|------|------|
| 빌드 실패 | 자동 머지 안 됨, PR 유지 |
| 테스트 실패 | 자동 머지 안 됨, PR 유지 |
| Lint 실패 | 자동 머지 안 됨, PR 유지 |

### 5.2 Major 버전 업데이트

| 상황 | 동작 |
|------|------|
| 1.x → 2.x | 자동 머지 스킵, 코멘트 추가 |
| 0.x → 1.x | 자동 머지 스킵, 코멘트 추가 |

### 5.3 네트워크 오류

| 상황 | 동작 |
|------|------|
| npm 접속 불가 | Dependabot 다음 사이클에 재시도 |
| GitHub API 오류 | Workflow 실패, 수동 재실행 필요 |

---

## 6. 모니터링

### 6.1 성공 지표

- PR 생성 → 머지까지 소요 시간
- CI 통과율
- 자동 머지 성공률

### 6.2 GitHub Insights

```
Settings → Code security and analysis → Dependabot
```

- 업데이트 현황
- 실패 로그
- 다음 체크 예정 시간

---

## 7. 테스트 계획

### 7.1 단위 테스트

| 테스트 | 예상 결과 |
|--------|----------|
| @geniefy/ui 업데이트 PR | 자동 머지 활성화 |
| 다른 패키지 PR | 스킵 |
| Major 버전 업데이트 | 코멘트 추가, 자동 머지 스킵 |
| CI 실패 | 자동 머지 안 됨 |

### 7.2 통합 테스트

1. 테스트 저장소 생성
2. @geniefy/ui 0.0.1 설치
3. 0.0.2 버전 배포
4. Dependabot PR 생성 확인
5. CI 통과 후 자동 머지 확인

---

## 8. 구현 체크리스트

- [ ] dependabot.yml 템플릿 작성
- [ ] auto-merge workflow 작성
- [ ] /setup-design 명령어에 Step 6 추가
- [ ] Major 버전 감지 로직 구현
- [ ] 테스트 저장소에서 검증
- [ ] 문서 업데이트

---

## 9. 참고

- [Dependabot 설정 옵션](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [GitHub Actions 자동 머지](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
- [wait-on-check-action](https://github.com/lewagon/wait-on-check-action)
