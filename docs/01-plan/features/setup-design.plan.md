# /setup-design 명령어 구현 계획

- **작성일**: 2026-01-20
- **상태**: ✅ Completed
- **완료일**: 2026-01-21

---

## 1. 배경 및 문제 정의

### 현재 상황
design-system 저장소는 다음과 같이 배포됨:
- `tokens.css` → CDN (jsDelivr)
- `components/` → npm 패키지 (@geniefy/ui)
- `design-rules.md` → Skill로 자동 적용
- `docs/` → 문서 사이트 (Vercel)

### 해결된 문제점
- ~~새 프로젝트에서 디자인 시스템을 적용하려면 수동 작업이 많음~~ → `/setup-design` 한 번으로 해결
- ~~설정을 잘못하거나 빠뜨리면 일관성 없는 UI 발생~~ → Hook으로 규칙 자동 적용
- ~~새 버전 나올 때마다 수동 업데이트 필요~~ → Dependabot + auto-merge로 자동화

---

## 2. 구현된 파일 구조

```
design-system/
├── .claude/
│   ├── commands/
│   │   └── setup-design.md      ✅ 설치 명령어
│   ├── skills/
│   │   └── design-rules.md      ✅ UI 생성 규칙 + Token Safety
│   ├── scripts/
│   │   └── auto-contribute.sh   ✅ 자동 기여 스크립트
│   └── settings.local.json      ✅ Hook 설정
├── .github/
│   ├── CODEOWNERS               ✅ tokens.css 변경 시 리뷰 필수
│   └── workflows/
│       ├── publish.yml          ✅ npm 자동 배포
│       ├── dependabot-auto-merge.yml  ✅ 자동 머지
│       └── token-change-check.yml     ✅ 토큰 변경 감지
└── ...
```

### 사용자 프로젝트에 생성되는 파일

```
user-project/
├── CLAUDE.md                    # (수정) design-rules 참조 추가
├── package.json                 # (수정) @geniefy/ui 의존성 추가
├── .claude/
│   └── skills/
│       └── design-rules.md      # (복사) 양방향 동기화 대상
└── .github/
    ├── dependabot.yml           # (생성) 자동 업데이트
    └── workflows/
        └── dependabot-auto-merge.yml  # (생성) 자동 머지
```

---

## 3. 구현된 기능

### 3.1 /setup-design 명령어 (commands/setup-design.md)

**실행 단계:**
1. 프로젝트 타입 감지 (Next.js/React/HTML)
2. `npm install @geniefy/ui`
3. 토큰 import 추가 안내
4. **design-rules.md 복사** (node_modules → .claude/skills/)
5. CLAUDE.md 업데이트
6. Hook 설정
7. GitHub 토큰 확인
8. Dependabot + auto-merge 설정
9. 완료 메시지

### 3.2 design-rules Skill (skills/design-rules.md)

**트리거 키워드:**
`UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS|디자인|Button|Input|Modal|Card`

**핵심 규칙:**
- 하드코딩 색상 금지 → `var(--color-*)` 사용
- 임의 간격 금지 → `var(--spacing-*)` (8px 단위)
- radius 토큰만 사용 → `var(--radius-*)`
- 화면당 컴포넌트 최대 7개
- 배경/강조 색상 최대 3개

**Generation Protocol (4단계):**
1. 목적 파악
2. 토큰/컴포넌트 선택
3. 검증 (체크리스트)
4. 위반 시 거부 및 수정

### 3.3 auto-contribute 스크립트 (scripts/auto-contribute.sh)

**동작:**
- `components/` 폴더에 파일 생성/수정 시 자동 실행
- `.claude/skills/design-rules.md` 수정 시 자동 실행
- GitHub API로 design-system 저장소에 직접 커밋
- GITHUB_TOKEN 필요 (없으면 조용히 스킵)

**커밋 메시지 형식:**
```
feat: Auto-contribute components/Card/index.tsx

- From: hostname
- Time: 2026-01-21 12:00
- Auto-contributed via design-system hook
```

### 3.4 Hook 설정 (settings.local.json)

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS|디자인|Button|Input|Modal|Card",
        "hooks": [
          {
            "type": "command",
            "command": "cat .claude/skills/design-rules.md",
            "statusMessage": "Design rules 로딩 중..."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "if [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"components/\"* ]] || [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"design-rules.md\"* ]]; then .claude/scripts/auto-contribute.sh \"$CLAUDE_TOOL_ARG_file_path\"; fi"
          }
        ]
      }
    ]
  }
}
```

### 3.5 Dependabot 자동 업데이트

**dependabot.yml:**
- 매일 09:00 (Asia/Seoul) 체크
- `@geniefy/ui`만 대상
- 커밋 prefix: `chore(deps)`
- 라벨: `dependencies`, `auto-merge`

### 3.6 auto-merge 워크플로우

**동작 방식:**
| 버전 변경 | 동작 |
|----------|------|
| patch (0.0.x) | CI 통과 후 자동 머지 |
| minor (0.x.0) | CI 통과 후 자동 머지 |
| major (x.0.0) | 수동 리뷰 필요 (코멘트 알림) |

### 3.7 Token Safety Guard (2026-01-22 추가)

CDN으로 즉시 반영되는 tokens.css의 Breaking Change를 방지하기 위한 안전장치.

**구성 파일:**
| 파일 | 역할 |
|------|------|
| `.github/CODEOWNERS` | tokens.css 변경 시 관리자 리뷰 필수 |
| `.github/workflows/token-change-check.yml` | PR에서 토큰 삭제 감지 및 경고 |
| `.claude/skills/design-rules.md` | 토큰 보호 규칙 (섹션 3) |

**token-change-check.yml 동작:**
1. PR에서 tokens.css 변경 감지
2. base 브랜치와 토큰명 비교
3. 삭제된 토큰 있으면 경고 코멘트 추가
4. 추가된 토큰만 있으면 Safe 표시

**CODEOWNERS 보호 대상:**
- `/tokens.css` - 토큰 파일
- `/package.json` - 패키지 설정
- `/.github/workflows/` - CI/CD 워크플로우
- `/.claude/skills/design-rules.md` - 규칙 파일
- `/components/` - 컴포넌트

---

## 4. 양방향 동기화 흐름

```
┌─────────────────────────────────────────────────────────────┐
│                    design-system (중앙)                      │
│  components/ ←────────────────────────────────────────────┐ │
│  .claude/skills/design-rules.md ←─────────────────────────┤ │
│  tokens.css                                               │ │
│  @geniefy/ui (npm)                                        │ │
└─────────────────────────────────────────────────────────────┘
        │                                                   ↑
        │ npm install                          auto-contribute.sh
        │ (Dependabot으로 자동 업데이트)         (PostToolUse Hook)
        ↓                                                   │
┌─────────────────────────────────────────────────────────────┐
│                    사용자 프로젝트                           │
│  - @geniefy/ui 사용                                        │
│  - .claude/skills/design-rules.md (복사본)                 │
│  - components/ 생성 시 자동 기여 ──────────────────────────┤ │
│  - design-rules.md 수정 시 자동 기여 ─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 4.1 design-rules.md 동기화 상세

| 방향 | 트리거 | 결과 |
|------|--------|------|
| 다운스트림 | npm install/update | node_modules → .claude/skills/ 복사 |
| 업스트림 | .claude/skills/design-rules.md 수정 | auto-contribute → 중앙 저장소 커밋 |

---

## 5. 검증 완료

### 5.1 기본 설치 테스트
- [x] `/setup-design` 명령어 실행 가능
- [x] 안내에 따라 설정 완료 가능

### 5.2 Hook 테스트
- [x] UI 키워드 입력 시 design-rules 자동 로딩
- [x] components/ 파일 생성 시 auto-contribute 트리거

### 5.3 자동 업데이트 테스트
- [x] Dependabot 설정 파일 생성
- [x] auto-merge 워크플로우 생성

---

## 6. 참고

- [setup-design.md](.claude/commands/setup-design.md) - 명령어 전체 내용
- [design-rules.md](.claude/skills/design-rules.md) - UI 규칙 전체
- [auto-contribute.sh](.claude/scripts/auto-contribute.sh) - 기여 스크립트
- [문서 사이트](https://docs-ashy-five.vercel.app) - Vercel 배포
