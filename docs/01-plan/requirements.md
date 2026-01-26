# Project Requirements

## Overview

@design-geniefy/ui 디자인 시스템 문서 사이트. 비개발자/비디자이너가 디자인 시스템을 시각적으로 확인하고 사용법을 익힐 수 있는 웹사이트.

## Goals

1. 비개발자/디자이너가 디자인 시스템을 쉽게 확인
2. 컴포넌트를 시각적으로 미리보기
3. 토큰 값(색상, 간격 등)을 한눈에 시각화
4. npm 패키지 업데이트 현황 확인
5. URL 공유만으로 누구나 접근 가능

## Target Users

| 사용자 | 요구사항 |
|--------|----------|
| 디자이너 | 토큰 값 확인, 컴포넌트 스펙 확인 |
| PM/기획자 | 사용 가능한 컴포넌트 파악, 디자인 일관성 검토 |
| 신규 개발자 | 설치 방법, 사용 예시 코드 확인 |
| 외부 협력사 | 디자인 가이드라인 공유 |

---

## Functional Requirements

### FR-1: 메인 페이지 (`/`)
- [x] 디자인 시스템 소개
- [ ] 설치 방법 (npm, CDN)
- [ ] 빠른 시작 코드 예시
- [ ] 최근 업데이트 (CHANGELOG 연동)

### FR-2: 토큰 페이지 (`/tokens`)
- [ ] **Colors**: Neutral, Primary, Semantic 색상표
- [ ] **Spacing**: 8px 단위 간격 시각화
- [ ] **Radius**: 각 radius 적용 예시
- [ ] **Typography**: font-size, line-height, weight

### FR-3: 컴포넌트 목록 페이지 (`/components`)
- [ ] 전체 컴포넌트 카드 그리드
- [ ] 각 컴포넌트 썸네일/미리보기

### FR-4: 컴포넌트 상세 페이지 (`/components/[name]`)
- [ ] 컴포넌트 설명
- [ ] 변형별(variant) 미리보기
- [ ] 크기별(size) 미리보기
- [ ] Props 테이블 (타입, 기본값, 설명)
- [ ] 코드 예시 (복사 버튼)

### FR-5: 문서용 UI 컴포넌트
- [ ] `Preview.tsx` - 컴포넌트 미리보기 박스
- [ ] `CodeBlock.tsx` - 코드 블록 (syntax highlight)
- [ ] `PropsTable.tsx` - Props 테이블
- [ ] `ColorGrid.tsx` - 색상 팔레트 그리드
- [ ] `SpacingScale.tsx` - 간격 스케일 시각화
- [ ] `Sidebar.tsx` - 사이드바 네비게이션

---

## Non-Functional Requirements

### NFR-1: 배포
- Vercel 배포
- PR마다 프리뷰 URL 자동 생성
- main 머지 시 Production 자동 배포

### NFR-2: 성능
- 정적 생성(SSG) 우선
- 이미지 최적화

### NFR-3: 접근성
- 반응형 레이아웃 (모바일 지원)
- 다크 모드 지원 (Phase 3)

### NFR-4: 유지보수
- 새 컴포넌트 추가 시 자동 목록 갱신 (Phase 3)
- tokens.css 변경 시 자동 반영

---

## Tech Stack

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (App Router) |
| 스타일링 | CSS Variables (tokens.css 활용) |
| 코드 하이라이트 | Prism.js 또는 Shiki |
| 배포 | Vercel |
| 패키지 매니저 | npm |

---

## Implementation Phases

### Phase 1: MVP
- [ ] docs/ 폴더 Next.js 초기화
- [ ] 기본 레이아웃 (사이드바, 헤더)
- [ ] 메인 페이지
- [ ] 토큰 페이지 (색상, 간격)
- [ ] Vercel 배포 설정

### Phase 2: 컴포넌트 문서
- [ ] 컴포넌트 목록 페이지
- [ ] Button 문서 페이지
- [ ] Input 문서 페이지
- [ ] Preview, PropsTable 컴포넌트

### Phase 3: 고도화
- [ ] 다크 모드 토글
- [ ] 코드 복사 기능
- [ ] 검색 기능
- [ ] 컴포넌트 자동 탐지

---

## References

- [Radix UI Docs](https://www.radix-ui.com/) - 컴포넌트 문서 구조
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - 토큰 시각화
- [shadcn/ui](https://ui.shadcn.com/) - 미니멀한 문서 디자인

---

*Created: 2026-01-20*
*Source: docs/design-workflow/docs-site-plan.md*
