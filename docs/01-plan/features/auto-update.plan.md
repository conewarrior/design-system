# 최신 업데이트 (Auto-Update) 기능 계획

- **작성일**: 2026-01-21
- **상태**: ✅ Done

---

## 1. 배경 및 문제 정의

### 현재 상황
- @design-geniefy/ui 패키지가 npm에 배포됨
- 새 버전 출시 시 각 프로젝트에서 수동으로 업데이트 필요
- `/setup-design` 명령어로 초기 설정은 자동화됨

### 문제점
- 새 버전 출시를 각 프로젝트에서 인지하기 어려움
- 수동 업데이트는 놓치기 쉬움
- 업데이트 지연으로 프로젝트 간 버전 불일치 발생
- Breaking change 발생 시 대응이 늦어짐

### 요구사항
1. 새 버전 출시 시 자동으로 PR 생성
2. CI 테스트 통과 시 자동 머지
3. Breaking change 발생 시 알림
4. 버전 업데이트 이력 추적

---

## 2. 검토한 옵션

### 옵션 1: Dependabot ✅ 선택
GitHub 내장 의존성 업데이트 봇

**장점:**
- GitHub 네이티브, 별도 설치 불필요
- 설정 파일만으로 동작
- PR 자동 생성, 자동 머지 지원
- Changelog 자동 포함

**단점:**
- GitHub 전용
- 세밀한 커스터마이징 제한적

### 옵션 2: Renovate
오픈소스 의존성 업데이트 도구

**장점:**
- 다양한 플랫폼 지원
- 세밀한 설정 가능
- 그룹 업데이트 지원

**단점:**
- 별도 설치/설정 필요
- 러닝 커브 존재

### 옵션 3: GitHub Actions 직접 구현
npm outdated 체크 후 PR 생성

**장점:**
- 완전한 커스터마이징 가능

**단점:**
- 유지보수 부담
- 엣지 케이스 처리 필요

---

## 3. 선택: Dependabot + 자동 머지

### 결정 이유
1. **간편함**: 설정 파일만으로 즉시 동작
2. **안정성**: GitHub 공식 기능으로 안정적
3. **자동 머지**: CI 통과 시 자동 머지로 완전 자동화
4. **조직 표준화**: 모든 프로젝트에 동일 설정 적용 가능

---

## 4. 구현 내용

### 4.1 Dependabot 설정

**파일:** `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      - dependency-name: "@design-geniefy/ui"
    commit-message:
      prefix: "chore(deps)"
    labels:
      - "dependencies"
      - "auto-merge"
```

### 4.2 자동 머지 Workflow

**파일:** `.github/workflows/dependabot-auto-merge.yml`

```yaml
name: Auto-merge Dependabot PRs

on:
  pull_request:
    types: [opened, synchronize]

permissions:
  contents: write
  pull-requests: write

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'

    steps:
      - name: Check if @design-geniefy/ui update
        id: check
        run: |
          if [[ "${{ github.event.pull_request.title }}" == *"@design-geniefy/ui"* ]]; then
            echo "match=true" >> $GITHUB_OUTPUT
          fi

      - name: Wait for CI
        if: steps.check.outputs.match == 'true'
        uses: lewagon/wait-on-check-action@v1.3.4
        with:
          ref: ${{ github.event.pull_request.head.ref }}
          check-name: 'build'  # CI job 이름
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          wait-interval: 10

      - name: Enable auto-merge
        if: steps.check.outputs.match == 'true'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 5. /setup-design 연동

`/setup-design` 명령어 실행 시 위 파일들을 자동 생성합니다.

### 생성되는 파일

| 파일 | 용도 |
|------|------|
| `.github/dependabot.yml` | @design-geniefy/ui 업데이트 감지 |
| `.github/workflows/dependabot-auto-merge.yml` | 자동 머지 |

### 동작 흐름

```
1. @design-geniefy/ui 새 버전 배포 (npm publish)
     ↓
2. Dependabot이 버전 차이 감지 (매일 체크)
     ↓
3. PR 자동 생성 (chore(deps): bump @design-geniefy/ui from x to y)
     ↓
4. CI 테스트 실행 (build, lint, test)
     ↓
5. CI 통과 시 자동 머지
     ↓
6. 프로젝트에 최신 버전 반영 완료
```

---

## 6. 구현 단계

### Phase 1: 기본 설정 (현재)
- [x] dependabot.yml 템플릿 작성
- [x] auto-merge workflow 템플릿 작성
- [x] /setup-design 명령어에 포함

### Phase 2: 알림 연동 + Safety Guard (2026-01-22 추가)
- [ ] Slack/Discord 알림 추가
- [x] Breaking change 감지 시 경고 (token-change-check.yml)
- [x] CODEOWNERS로 리뷰 필수화
- [ ] 업데이트 대시보드

### Phase 3: 고급 기능
- [ ] 버전별 Changelog 자동 생성
- [ ] 마이그레이션 가이드 링크 포함
- [ ] 롤백 자동화

---

## 7. 검증 방법

1. **Dependabot 동작 확인**
   - 테스트 프로젝트에 설정 적용
   - @design-geniefy/ui 새 버전 배포
   - PR 자동 생성 확인

2. **자동 머지 확인**
   - CI 통과 후 자동 머지 확인
   - package.json 버전 업데이트 확인

3. **실패 케이스**
   - CI 실패 시 머지 안 됨 확인
   - @design-geniefy/ui 외 패키지는 자동 머지 안 됨 확인

---

## 8. Token Safety Guard (2026-01-22 추가)

CDN으로 배포되는 tokens.css는 버전 관리 없이 즉시 반영되므로, Breaking Change 방지를 위한 별도 안전장치 필요.

### 구현된 보호 장치

| 파일 | 역할 |
|------|------|
| `.github/CODEOWNERS` | tokens.css 변경 시 관리자 리뷰 필수 |
| `.github/workflows/token-change-check.yml` | PR에서 토큰 삭제 감지 |
| `.claude/skills/design-rules.md` 섹션 3 | 토큰 보호 규칙 명시 |

### token-change-check.yml 동작 흐름

```
1. PR에서 tokens.css 변경 감지
       ↓
2. base 브랜치와 토큰명 비교
       ↓
3. 삭제된 토큰 있으면
       ↓
4. PR에 경고 코멘트 추가
   "⚠️ Breaking Change: 다음 토큰이 삭제됩니다"
```

### 보호 대상 (CODEOWNERS)
- `/tokens.css` - CDN 배포 토큰
- `/package.json` - 패키지 메타데이터
- `/.github/workflows/` - CI/CD
- `/.claude/skills/design-rules.md` - UI 규칙
- `/components/` - npm 배포 컴포넌트

---

## 9. 고려사항

### 보안
- Dependabot은 GitHub 공식 기능으로 안전
- GITHUB_TOKEN은 PR 작성자 권한만 가짐

### 호환성
- GitHub Actions 사용 가능한 저장소만 지원
- Private 저장소도 지원

### 롤백
- 문제 발생 시 `git revert` 또는 버전 고정으로 대응
- Breaking change 시 major 버전 업데이트는 수동 리뷰

---

## 10. 참고

- [Dependabot 문서](https://docs.github.com/en/code-security/dependabot)
- [Auto-merge PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
- [CODEOWNERS 문서](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [setup-design.md](/setup-design 명령어)
