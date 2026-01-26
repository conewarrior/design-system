# Navigation Restructure Plan

## 1. 개요

문서 사이트 네비게이션을 탑바 + 사이드바 구조로 변경하고, Status 섹션을 세분화하여 Docs와 균형 맞춤.

## 2. 현재 구조

```
플랫 사이드바 (모든 페이지 동일)
├── GETTING STARTED
│   ├── Introduction
│   └── Install
├── FOUNDATIONS
│   └── Design Tokens
├── COMPONENTS
│   ├── Overview
│   ├── Button
│   └── Input
└── STATUS
    ├── Changelog
    └── Version Adoption
```

**문제점:**
- 컴포넌트 증가 시 사이드바가 과도하게 길어짐
- Docs와 Status가 성격이 다른데 같은 위계에 혼재

## 3. 변경 후 구조

### 3.1 탑바 메뉴

```
┌─────────────────────────────────────────────────┐
│ @design-geniefy/ui         [Docs]  [Status]            │
└─────────────────────────────────────────────────┘
```

- **Docs**: 문서/가이드/컴포넌트 (개발자용)
- **Status**: 변경 이력/버전 현황 (운영/모니터링)

### 3.2 Docs 사이드바

```
GETTING STARTED
├── Introduction
└── Install

FOUNDATIONS
└── Design Tokens

COMPONENTS
├── Overview
├── Button
├── Input
└── (향후 확장...)
```

### 3.3 Status 사이드바

```
OVERVIEW
└── Dashboard          ← 전체 요약 (새로 추가)

CHANGES
├── All Changes        ← 전체 변경 로그
├── Components         ← 컴포넌트 변경만 필터
└── Tokens             ← 토큰 변경만 필터

ADOPTION
├── Dashboard          ← 버전 채택 현황
├── By Project         ← 프로젝트별 상세
└── Pending PRs        ← 대기 중인 업데이트

PLANNING
├── Roadmap            ← 향후 계획
└── Migration Guide    ← 버전 마이그레이션 가이드
```

## 4. 라우트 구조

### Docs (`/docs/...` 또는 루트)
| 경로 | 페이지 |
|------|--------|
| `/` | Introduction |
| `/install/` | Install |
| `/tokens/` | Design Tokens |
| `/components/` | Components Overview |
| `/components/button/` | Button |
| `/components/input/` | Input |

### Status (`/status/...`)
| 경로 | 페이지 |
|------|--------|
| `/status/` | Status Overview (대시보드) |
| `/status/changes/` | All Changes |
| `/status/changes/components/` | Component Changes |
| `/status/changes/tokens/` | Token Changes |
| `/status/adoption/` | Version Adoption Dashboard |
| `/status/adoption/projects/` | By Project |
| `/status/adoption/pending/` | Pending PRs |
| `/status/roadmap/` | Roadmap |
| `/status/migration/` | Migration Guide |

## 5. 컴포넌트 변경

### 5.1 TopNav (신규)
```tsx
// ui/TopNav.tsx
- 로고
- [Docs] [Status] 메뉴
- 현재 섹션 하이라이트
```

### 5.2 Sidebar (수정)
```tsx
// ui/Sidebar.tsx
- props로 현재 섹션 받음
- 섹션에 따라 다른 navigation 렌더링
- docsNavigation / statusNavigation 분리
```

### 5.3 Layout (수정)
```tsx
// app/layout.tsx
- TopNav 추가
- pathname 기반으로 섹션 판별
- Sidebar에 섹션 전달
```

## 6. 구현 단계

### Phase 1: 구조 변경
- [ ] TopNav 컴포넌트 생성
- [ ] Sidebar 섹션별 분리
- [ ] Layout 수정 (TopNav + Sidebar)
- [ ] 기존 페이지 라우트 유지

### Phase 2: Status 페이지 확장
- [ ] `/status/` Overview 페이지
- [ ] Changes 필터 페이지 (components, tokens)
- [ ] Adoption 세부 페이지 (projects, pending)

### Phase 3: Planning 페이지
- [ ] Roadmap 페이지
- [ ] Migration Guide 페이지

## 7. 스타일 변경

### TopNav 스타일
```css
.top-nav {
  height: 56px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-4);
}

.top-nav-menu {
  display: flex;
  gap: var(--spacing-4);
}

.top-nav-link {
  /* 탭 스타일 */
}

.top-nav-link.active {
  /* 활성 상태 */
}
```

### Layout 조정
```css
.layout {
  display: flex;
  flex-direction: column;
}

.layout-body {
  display: flex;
  margin-top: 56px; /* TopNav 높이 */
}
```

## 8. 마이그레이션

### 리다이렉트 필요
| 이전 경로 | 새 경로 |
|----------|---------|
| `/changelog/` | `/status/changes/` |
| `/updates/` | `/status/adoption/` |

### next.config.js
```js
async redirects() {
  return [
    { source: '/changelog', destination: '/status/changes', permanent: true },
    { source: '/updates', destination: '/status/adoption', permanent: true },
  ]
}
```

## 9. 검증 방법

1. **네비게이션 테스트**
   - Docs ↔ Status 전환 시 사이드바 변경 확인
   - 모든 링크 동작 확인
   - 브라우저 뒤로가기 정상 동작

2. **반응형 테스트**
   - 모바일에서 TopNav + 햄버거 메뉴
   - 태블릿/데스크톱 레이아웃

3. **리다이렉트 테스트**
   - 기존 URL 접근 시 새 URL로 이동

## 10. 참고

- 레이아웃 일관성 유지 (양쪽 모두 사이드바)
- Status 사이드바 항목 8~10개로 Docs와 균형
- 향후 컴포넌트 증가에도 구조 유지 가능

---

*Created: 2026-01-21*
*Status: 📋 Planning*
