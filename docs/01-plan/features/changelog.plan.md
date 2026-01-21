# Component Changelog 기능 계획

> **경로**: `/changelog`
> **목적**: 디자인 시스템 컴포넌트의 변경 이력 및 활동 로그

- **작성일**: 2026-01-21
- **상태**: 📋 Planning

---

## 1. 배경 및 문제 정의

### 현재 상황
- 컴포넌트가 Git 커밋으로 추가/수정됨
- CHANGELOG.md 파일이 수동으로 관리됨
- 최근 변경사항을 한눈에 파악하기 어려움

### 문제점
- 어떤 컴포넌트가 최근에 추가/수정되었는지 파악 어려움
- 누가 언제 변경했는지 추적하려면 Git 로그를 직접 확인해야 함
- 변경 내용을 팀원과 공유하기 번거로움
- 토큰 변경사항도 별도로 확인해야 함

### 요구사항
1. 최근 변경된 컴포넌트/토큰 목록 시각화
2. 변경자(author), 변경 시간 표시
3. 변경 유형(추가/수정/삭제) 구분
4. 커밋 메시지 및 상세 diff 링크

### 관련 기능
- [update-dashboard.plan.md](./update-dashboard.plan.md) - 버전 채택 현황

---

## 2. 기능 정의

### 2.1 메인 화면 (`/changelog`)

```
┌──────────────────────────────────────────────────────────────┐
│  📋 변경 로그                                    최근 30일   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 2026-01-21                                             │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │                                                        │ │
│  │  🆕 Card 컴포넌트 추가                                  │ │
│  │     @hskim · 14:30                                    │ │
│  │     components/Card/index.tsx                         │ │
│  │     [커밋 보기]                                        │ │
│  │                                                        │ │
│  │  ✏️ Button hover 스타일 개선                           │ │
│  │     @hskim · 10:15                                    │ │
│  │     components/Button/index.tsx                       │ │
│  │     [커밋 보기]                                        │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 2026-01-20                                             │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │                                                        │ │
│  │  🎨 tokens.css 색상 토큰 추가                          │ │
│  │     @designer · 16:00                                 │ │
│  │     --color-success, --color-warning                  │ │
│  │     [커밋 보기]                                        │ │
│  │                                                        │ │
│  │  🗑️ legacy-button 삭제                                │ │
│  │     @hskim · 09:30                                    │ │
│  │     components/LegacyButton/ (삭제됨)                  │ │
│  │     [커밋 보기]                                        │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [더 보기]                                                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 2.2 변경 유형

| 아이콘 | 유형 | 설명 |
|--------|------|------|
| 🆕 | 추가 | 새 컴포넌트/파일 생성 |
| ✏️ | 수정 | 기존 파일 변경 |
| 🗑️ | 삭제 | 파일/컴포넌트 삭제 |
| 🎨 | 토큰 | tokens.css 변경 |
| 📝 | 문서 | README, 주석 등 문서 변경 |

### 2.3 필터 기능

- **기간**: 최근 7일 / 30일 / 전체
- **유형**: 컴포넌트 / 토큰 / 문서 / 전체
- **작성자**: 전체 / 특정 사용자

---

## 3. 데이터 소스

### 3.1 Git 커밋 로그

```bash
# 최근 커밋 조회
git log --pretty=format:'%H|%an|%at|%s' --name-status -- components/ tokens.css

# 출력 예시
abc123|hskim|1705824600|feat: Card 컴포넌트 추가
A       components/Card/index.tsx
A       components/Card/Card.module.css
```

### 3.2 GitHub API

```typescript
// 커밋 목록 조회
GET /repos/geniefy/design-system/commits?path=components/

// 커밋 상세 조회 (변경 파일 목록)
GET /repos/geniefy/design-system/commits/{sha}
```

### 3.3 데이터 구조

```typescript
interface ChangeLogEntry {
  id: string;           // 커밋 SHA
  type: 'add' | 'modify' | 'delete' | 'token' | 'docs';
  title: string;        // 커밋 메시지 첫 줄
  description?: string; // 커밋 메시지 본문
  author: {
    name: string;
    avatar?: string;
  };
  timestamp: Date;
  files: {
    path: string;
    status: 'added' | 'modified' | 'deleted';
  }[];
  commitUrl: string;    // GitHub 커밋 링크
}
```

---

## 4. 구현 방식

### 옵션 A: 빌드 타임 생성 (선택)
빌드 시 Git 로그를 파싱하여 JSON 생성

**장점:**
- GitHub API 불필요
- Rate Limit 걱정 없음
- 빠른 로딩

**단점:**
- 실시간 업데이트 안 됨
- 배포 필요

### 옵션 B: GitHub API 실시간 조회
페이지 로드 시 API 호출

**장점:**
- 항상 최신 데이터

**단점:**
- Rate Limit 고려 필요
- 로딩 시간

### 선택: 옵션 A (빌드 타임) + ISR

```typescript
// 빌드 시 또는 ISR로 10분마다 갱신
export const revalidate = 600; // 10분

async function getChangelog() {
  // Git 로그 파싱 또는 GitHub API
}
```

---

## 5. 구현 단계

### Phase 1: MVP ✅
- [x] `/changelog` 페이지 생성
- [x] 하드코딩된 샘플 데이터로 UI 구현
- [x] 날짜별 그룹핑
- [x] 변경 유형 아이콘

### Phase 2: 데이터 연동 ✅
- [x] Git 로그 파싱 스크립트 (`docs/scripts/generate-changelog.js`)
- [x] 빌드 시 JSON 생성 (`npm run prebuild`)
- [x] ISR 설정 (10분 = 600초)

### Phase 3: 고도화
- [ ] 필터 기능
- [ ] 페이지네이션
- [ ] RSS 피드 생성

---

## 6. 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (기존 docs 사이트) |
| 데이터 | Git log 파싱 / GitHub API |
| 갱신 | ISR (10분) |
| 스타일 | CSS Variables (tokens.css) |

---

## 7. 검증 방법

1. **데이터 정확성**
   - Git 로그와 표시 내용 일치 확인
   - 변경 유형 분류 정확성

2. **UI/UX**
   - 날짜별 그룹핑 정상 동작
   - 커밋 링크 연결 확인

3. **성능**
   - 페이지 로딩 시간
   - ISR 갱신 동작

---

## 8. 참고

- [Git Log Format](https://git-scm.com/docs/git-log)
- [GitHub Commits API](https://docs.github.com/en/rest/commits/commits)
- [Next.js ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
