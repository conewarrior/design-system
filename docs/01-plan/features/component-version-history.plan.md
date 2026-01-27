# 컴포넌트 버전 히스토리 기능 계획

> **경로**: 각 컴포넌트 페이지 (`/components/button`, `/components/card` 등)
> **목적**: 컴포넌트별 버전 히스토리를 시각적으로 비교 (렌더링 + diff)

- **작성일**: 2026-01-27
- **상태**: 📋 Planning

---

## 1. 배경 및 문제 정의

### 현재 상황
- `/changelog`에서 Git 커밋 로그 기반 텍스트 변경 이력 제공
- 컴포넌트의 **시각적 변화**는 확인 불가
- 이전 버전 코드는 Git에만 존재

### 문제점
- 컴포넌트가 어떻게 생겼었는지 시각적으로 확인 어려움
- 버전 간 코드 diff 확인하려면 Git 직접 조회 필요
- 디자인 변경 히스토리 추적 불편

### 요구사항
1. 컴포넌트 페이지에서 이전 버전 시각적 렌더링
2. 버전 간 코드 diff 하이라이팅
3. 탭 전환 방식으로 버전 비교
4. UI가 어지럽지 않도록 아코디언으로 숨김

### 관련 기능
- [changelog.plan.md](./changelog.plan.md) - Git 커밋 로그 기반 텍스트 변경 이력

---

## 2. 검토한 옵션

### 옵션 A: 스냅샷 파일 저장
버전별 컴포넌트 코드를 별도 폴더에 저장

**장점:**
- 빌드 시 Git 명령 불필요
- 파일 접근 빠름

**단점:**
- 저장소 크기 증가
- 버전마다 중복 코드 저장
- 수동 관리 필요

### 옵션 B: Git 태그 기반 ✅ 선택
npm publish 시 생성되는 버전 태그 활용

**장점:**
- 저장소 크기 증가 없음
- 이미 Git에 히스토리 존재
- npm 버전과 1:1 매핑
- 자동화 용이

**단점:**
- 빌드 시 Git 명령 필요
- Git 접근 권한 필요

### 옵션 C: GitHub API
GitHub REST API로 특정 태그의 파일 조회

**장점:**
- 서버 환경에서도 동작

**단점:**
- Rate Limit 고려 필요
- 네트워크 의존성
- API 키 관리

---

## 3. 선택: Git 태그 기반 (옵션 B)

### 결정 이유
1. **저장소 효율**: 스냅샷 저장 방식은 버전마다 중복 코드로 저장소가 무거워짐
2. **이미 존재**: Git 태그에 모든 버전 히스토리가 이미 있음
3. **npm 연동**: `npm publish` 시 자동 생성되는 태그와 1:1 매핑
4. **빌드 타임 추출**: 배포 환경에서 Git 접근 가능

---

## 4. 기능 정의

### 4.1 VersionHistory 아코디언

컴포넌트 페이지 하단에 추가, 기본적으로 접혀있음

```
┌─────────────────────────────────────┐
│ Button                              │
├─────────────────────────────────────┤
│ [현재 버전 Preview]                  │
│                                     │
│ Props / Usage / Code 등...          │
│                                     │
│ ▶ Version History (3)               │  ← 접혀있음
└─────────────────────────────────────┘
```

### 4.2 VersionTabs (펼쳤을 때)

```
│ ▼ Version History                   │
│ ┌─────────────────────────────────┐ │
│ │ [v0.0.5] [v0.0.6 ✓] [v0.0.7]   │ │  ← 버전 탭
│ ├─────────────────────────────────┤ │
│ │                                 │ │
│ │   [컴포넌트 렌더링 결과]         │ │  ← 실제 렌더링
│ │                                 │ │
│ ├─────────────────────────────────┤ │
│ │ 변경 사항: font-size 축소       │ │  ← 변경 요약
│ ├─────────────────────────────────┤ │
│ │ [Code] [Diff]                   │ │  ← 코드/Diff 토글
│ ├─────────────────────────────────┤ │
│ │ - fontSize: 'var(--font-size-base)' │  ← diff
│ │ + fontSize: 'var(--font-size-sm)'   │
│ └─────────────────────────────────┘ │
```

---

## 5. 데이터 소스

### 5.1 Git 태그 명령

```bash
# 태그 목록 조회
git tag -l "v*"

# 특정 태그의 파일 내용 조회
git show v0.0.5:components/Button/index.tsx
```

### 5.2 데이터 구조

```typescript
// data/component-versions.json (빌드 시 자동 생성)
interface ComponentVersions {
  [componentName: string]: {
    versions: {
      version: string;      // "0.0.6"
      date: string;         // "2026-01-27"
      tag: string;          // "v0.0.6"
      changes: string[];    // ["font-size 축소"]
    }[];
  };
}
```

---

## 6. 구현 방식

### 버전 추출 스크립트

```typescript
// docs/scripts/extract-versions.ts
import { execSync } from 'child_process';

function getComponentCodeAtTag(componentName: string, tag: string): string {
  const filePath = `components/${componentName}/index.tsx`;
  return execSync(`git show ${tag}:${filePath}`).toString();
}

function getAllVersionTags(): string[] {
  return execSync('git tag -l "v*"').toString().trim().split('\n');
}
```

### 컴포넌트 동적 렌더링

**빌드 타임 번들링** (권장)
- 각 버전의 컴포넌트를 별도 청크로 빌드
- dynamic import로 필요할 때 로드

### Diff 라이브러리

- `react-diff-viewer-continued`: React용 diff 뷰어
- `diff`: 텍스트 diff 계산

---

## 7. 구현 단계

### Phase 1: 버전 추출 스크립트 ✅
- [x] Git 태그에서 컴포넌트 코드 추출하는 스크립트 작성
- [x] `data/component-versions.json` 메타데이터 자동 생성
- [x] 빌드 시 버전별 코드 캐싱

### Phase 2: UI 컴포넌트 개발 ✅
- [x] `VersionHistory` 아코디언 컴포넌트 생성
- [x] `VersionTabs` 탭 전환 UI 생성 (기존 Tabs 컴포넌트 활용)
- [x] `CodeDiff` diff 하이라이팅 컴포넌트
- [ ] 버전별 컴포넌트 실제 렌더링 (향후 구현)

### Phase 3: 컴포넌트 페이지 통합 (진행중)
- [x] Button 페이지에 VersionHistory 추가
- [x] Card 페이지에 VersionHistory 추가
- [x] Input 페이지에 VersionHistory 추가
- [ ] 나머지 컴포넌트 페이지에 VersionHistory 추가

### Phase 4: 자동화
- [ ] npm publish 시 버전 메타데이터 자동 업데이트
- [ ] GitHub Action으로 태그 생성 시 트리거

---

## 8. 파일 구조

```
docs/
├── data/
│   └── component-versions.json      # 버전 메타데이터 (빌드 시 생성)
├── scripts/
│   └── extract-versions.ts          # Git 태그에서 버전 추출
├── ui/
│   ├── VersionHistory.tsx           # 아코디언 컴포넌트
│   ├── VersionTabs.tsx              # 탭 전환 UI
│   └── CodeDiff.tsx                 # diff 하이라이팅
└── app/components/[name]/page.tsx   # 기존 컴포넌트 페이지
```

---

## 9. 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (기존 docs 사이트) |
| 데이터 | Git tag 기반 코드 추출 |
| Diff | react-diff-viewer-continued |
| 스타일 | CSS Variables (tokens.css) |

---

## 10. 검증 방법

1. **데이터 정확성**
   - Git 태그와 버전 매핑 확인
   - 코드 추출 정확성

2. **렌더링**
   - 이전 버전 컴포넌트 정상 렌더링
   - 현재 버전과 시각적 차이 확인

3. **Diff**
   - 코드 변경점 하이라이팅 정확성
   - 추가/삭제 라인 표시

---

## 11. 참고

- [Git Show](https://git-scm.com/docs/git-show)
- [react-diff-viewer-continued](https://www.npmjs.com/package/react-diff-viewer-continued)
- [Next.js Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)
