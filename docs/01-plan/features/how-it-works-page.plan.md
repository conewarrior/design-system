# "How it Works" 페이지 구현 계획

- **작성일**: 2026-01-21
- **상태**: ✅ Completed
- **완료일**: 2026-01-21

---

## 1. 배경 및 문제 정의

### 현재 상황
- `/setup-design` 명령어 하나로 디자인 시스템이 설치됨
- 양방향 동기화가 자동으로 작동함
- 하지만 **이 구조가 어떻게 동작하는지** 설명하는 문서가 없음

### 문제점
1. 신규 팀원이 구조를 이해하기 어려움
2. "왜 이렇게 복잡한가?"에 대한 답이 없음
3. 문제 발생 시 어디를 봐야 하는지 모름
4. 기여 방법을 모름

### 해결책
Getting Started 섹션에 **"How it Works"** 페이지를 추가하여:
- 전체 아키텍처 다이어그램 제공
- 각 구성요소의 역할 설명
- 데이터 흐름 (양방향 동기화) 시각화
- 문제 해결 가이드 포함

---

## 2. 페이지 구조

### 2.1 URL
`/install/how-it-works/`

### 2.2 위치
- **섹션**: Docs > Getting Started
- **순서**: Introduction → Install → **How it Works** (신규)

### 2.3 목차

```
1. Overview (개요)
   - 왜 이 구조가 필요한가?
   - 한눈에 보는 아키텍처

2. 배포 채널 (Distribution Channels)
   - npm 패키지 (@design-geniefy/ui)
   - CDN (jsDelivr)
   - 언제 무엇을 사용하는가?

3. 양방향 동기화 (Bidirectional Sync)
   3.1 다운스트림: 중앙 → 프로젝트
       - Dependabot 자동 업데이트
       - Auto-merge 워크플로우
   3.2 업스트림: 프로젝트 → 중앙
       - auto-contribute Hook
       - GitHub API 직접 커밋

4. Hook 시스템
   - UserPromptSubmit: design-rules 자동 로딩
   - PostToolUse: 컴포넌트 자동 기여

5. npm 배포 파이프라인
   - main 브랜치 push → GitHub Actions → npm publish

6. 트러블슈팅
   - 자동 업데이트가 안 될 때
   - 자동 기여가 안 될 때
   - Hook이 작동하지 않을 때
```

---

## 3. 시각적 요소

### 3.1 메인 아키텍처 다이어그램
```
┌─────────────────────────────────────────────────────────────────┐
│                  conewarrior/design-system (중앙 저장소)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │ components/ │  │ tokens.css  │  │   docs/     │              │
│  └──────┬──────┘  └──────┬──────┘  └─────────────┘              │
│         │                │                                       │
│    ┌────┴────┐      ┌────┴────┐                                 │
│    │   npm   │      │   CDN   │                                 │
│    │ publish │      │ jsDelivr│                                 │
│    └────┬────┘      └────┬────┘                                 │
└─────────┼────────────────┼──────────────────────────────────────┘
          │                │
          ▼                ▼
    @design-geniefy/ui      직접 링크
     (패키지)         (즉시 반영)
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       사용자 프로젝트                             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Dependabot     →    PR 생성    →    Auto-merge            ││
│  │  (매일 체크)         (새 버전)        (minor/patch)          ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  components/ 생성  →  Hook 감지  →  GitHub API 커밋         ││
│  │  (Write/Edit)         (PostToolUse)   (auto-contribute.sh)  ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 플로우 카드
각 동기화 방향을 시각적 카드로 표현:
- **Downstream** (파란색): 중앙 → 프로젝트
- **Upstream** (초록색): 프로젝트 → 중앙

### 3.3 인터랙티브 요소
- 각 구성요소 클릭 시 상세 설명 표시 (Accordion)
- 코드 블록으로 실제 설정 파일 내용 표시

---

## 4. 구현 파일

| 파일 | 용도 |
|------|------|
| `app/install/how-it-works/page.tsx` | 메인 페이지 |
| `ui/Sidebar.tsx` | 네비게이션 링크 추가 |
| `styles/globals.css` | 필요시 스타일 추가 |

---

## 5. 검증 기준

- [x] 페이지 빌드 성공 (21개 페이지)
- [x] 사이드바에서 접근 가능 (Getting Started > How it Works)
- [x] 다이어그램이 명확하게 표시됨 (ArchitectureDiagram 컴포넌트)
- [x] 모든 코드 블록 syntax highlighting 적용 (yaml 타입 추가)
- [x] 반응형 스타일 적용

---

## 6. 참고

- [setup-design.plan.md](./setup-design.plan.md) - 기존 구현 계획
- [setup-design.md](../../.claude/commands/setup-design.md) - 실제 명령어
- [auto-contribute.sh](../../.claude/scripts/auto-contribute.sh) - 자동 기여 스크립트
