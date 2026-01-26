# Install Page - Plan Document

- **Feature**: install-page
- **Created**: 2026-01-20
- **Status**: 📋 Planning
- **Related**: [docs-site.plan.md](./docs-site.plan.md)

---

## 1. 개요

### 1.1 목적
디자인 시스템 설치 방법을 단계별로 안내하는 페이지. 개발자와 비개발자 모두 쉽게 따라할 수 있는 설치 가이드를 제공한다.

### 1.2 배경
- `/setup-design` 명령어로 자동 설치가 가능하지만, 사용자에게 시각적인 안내가 필요함
- npm 설치, CDN 사용, Claude Code 설정 등 여러 방법이 있어 정리 필요
- 비개발자도 이해할 수 있는 명확한 가이드 필요

---

## 2. 현재 상태 분석

### 2.1 기존 구현 (docs/app/page.tsx)
```
현재 메인 페이지:
├── 설치 섹션
│   ├── npm 패키지: npm install @design-geniefy/ui
│   └── CDN: <link href="...tokens.css">
├── 빠른 시작: 코드 예시
└── Features, 컴포넌트 목록
```

### 2.2 부족한 점
| 항목 | 현재 | 필요 |
|------|------|------|
| Claude Command | ❌ 없음 | `/setup-design` 안내 필요 |
| 탭 UI | ❌ 순차 나열 | npm / CDN / Claude 탭 전환 |
| 코드 복사 | ❌ 없음 | 복사 버튼 필요 |
| 단계별 가이드 | ❌ 간략함 | Step 1, 2, 3 상세 설명 |
| 설치 확인 | ❌ 없음 | 체크리스트 필요 |
| Dependabot 안내 | ❌ 없음 | 자동 업데이트 설명 필요 |

---

## 3. 목표

### 3.1 주요 목표
- [ ] 3가지 설치 방법 탭 UI (npm / CDN / Claude Command)
- [ ] 단계별 가이드 (Step 1, 2, 3...)
- [ ] 코드 복사 버튼
- [ ] 설치 확인 체크리스트
- [ ] Dependabot 자동 업데이트 안내

### 3.2 성공 지표
| 지표 | 목표값 | 측정 방법 |
|------|--------|----------|
| 코드 복사 사용률 | 50%+ | 복사 버튼 클릭 이벤트 |
| 설치 성공률 | 높음 | 슬랙 피드백 |

---

## 4. 범위

### 4.1 포함 (In Scope)
- `/install` 별도 페이지 생성 (메인에서 분리)
- 설치 방법 3가지 탭 (npm / CDN / Claude Command)
- 각 방법별 단계별 가이드
- 코드 블록 + 복사 버튼 컴포넌트
- 설치 확인 체크리스트
- 자동 업데이트(Dependabot) 안내 섹션

### 4.2 제외 (Out of Scope)
- 컴포넌트 상세 사용법 (→ /components에서 다룸)
- 토큰 커스터마이징 (→ /tokens에서 다룸)
- 문제 해결 가이드 (→ 별도 Troubleshooting 페이지)

---

## 5. 요구사항

### 5.1 기능 요구사항
| ID | 요구사항 | 우선순위 | 상세 |
|----|----------|----------|------|
| FR-001 | 탭 컴포넌트 | High | npm/CDN/Claude 전환, 상태 유지 |
| FR-002 | CodeBlock 컴포넌트 | High | 복사 버튼, 언어별 하이라이팅 |
| FR-003 | Step 컴포넌트 | High | 번호 + 제목 + 설명 + 코드 |
| FR-004 | 체크리스트 컴포넌트 | Medium | 체크박스, 로컬 상태 저장 |
| FR-005 | 사이드바 업데이트 | Medium | /install 링크 추가 |

### 5.2 비기능 요구사항
| ID | 요구사항 | 기준 |
|----|----------|------|
| NFR-001 | 모바일 반응형 | 768px 이하 탭 → 아코디언 |
| NFR-002 | 접근성 | 키보드로 탭 전환 가능 |

---

## 6. 페이지 구조

```
/install
├── Hero
│   ├── 제목: "설치 가이드"
│   └── 설명: "3가지 방법으로 시작하세요"
│
├── 설치 방법 탭
│   ├── [npm] React/Next.js 프로젝트
│   │   ├── Step 1: 패키지 설치
│   │   ├── Step 2: tokens.css import
│   │   └── Step 3: 컴포넌트 사용
│   │
│   ├── [CDN] HTML/CSS 프로젝트
│   │   ├── Step 1: link 태그 추가
│   │   └── Step 2: CSS 변수 사용
│   │
│   └── [Claude Command] Claude Code 사용자
│       ├── Step 1: /setup-design 실행
│       ├── Step 2: 자동 설치 항목 확인
│       └── Step 3: GITHUB_TOKEN 설정 (선택)
│
├── 설치 확인
│   └── 체크리스트
│       ├── [ ] 컴포넌트 import 성공
│       ├── [ ] 토큰 CSS 적용됨
│       └── [ ] 버튼 렌더링 확인
│
└── 자동 업데이트
    ├── Dependabot 설명
    └── 설정 방법 안내
```

---

## 7. 콘텐츠 상세

### 7.1 npm 탭

**Step 1: 패키지 설치**
```bash
npm install @design-geniefy/ui
```

**Step 2: 스타일 import** (앱 진입점에서)
```tsx
// app/layout.tsx 또는 _app.tsx
import '@design-geniefy/ui/tokens.css';
```

**Step 3: 컴포넌트 사용**
```tsx
import { Button, Input } from '@design-geniefy/ui';

export default function Page() {
  return (
    <div>
      <Input placeholder="이메일" />
      <Button variant="primary">구독</Button>
    </div>
  );
}
```

### 7.2 CDN 탭

**Step 1: tokens.css 추가** (HTML head에)
```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css"
>
```

**Step 2: CSS 변수 사용**
```css
.my-button {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
}
```

### 7.3 Claude Command 탭

**Step 1: 명령어 실행** (Claude Code에서)
```
/setup-design
```

**Step 2: 자동 설치 항목**
```
✅ npm install @design-geniefy/ui
✅ CLAUDE.md에 디자인 규칙 추가
✅ Hook 설정 (UI 생성 시 규칙 자동 적용)
✅ Dependabot 자동 업데이트 설정
```

**Step 3: GitHub 토큰 설정** (자동 기여용, 선택)
```bash
export GITHUB_TOKEN="your_token_here"
```

---

## 8. 필요한 컴포넌트

| 컴포넌트 | 위치 | 용도 |
|----------|------|------|
| `Tabs` | docs/ui/Tabs.tsx | 탭 전환 UI |
| `CodeBlock` | docs/ui/CodeBlock.tsx | 코드 + 복사 버튼 |
| `Step` | docs/ui/Step.tsx | 단계별 가이드 |
| `Checklist` | docs/ui/Checklist.tsx | 체크리스트 |

---

## 9. 의존성

### 9.1 기술 의존성
- Next.js App Router (기존)
- docs/ui/Sidebar.tsx 수정 필요

### 9.2 선행 작업
- 없음 (docs-site 구현 완료)

---

## 10. 다음 단계

- [x] Plan 문서 작성 완료
- [ ] Design 문서 작성 (`/pdca-design install-page`)
- [ ] 구현
- [ ] 검증

---

*Created: 2026-01-20*
*Updated: 2026-01-20 - 현재 상태 분석 및 상세 내용 보강*
