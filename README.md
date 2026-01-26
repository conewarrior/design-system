# @design-geniefy/ui

AX 조직을 위한 디자인 시스템 저장소.

## 운영 원칙

| 파일 | 배포 방식 | 업데이트 반영 |
|------|-----------|---------------|
| `tokens.css` | CDN (jsDelivr) | 즉시 반영 (캐시 퍼지 후) |
| `components/` | npm 패키지 | 버전 업데이트 후 설치 |
| `design-rules.md` | CDN + 로컬 복사 | CDN 최신 + 로컬 커스텀 병행 |

### 왜 이렇게 나눴나?

- **토큰 = CDN**: 색상/간격 변경을 모든 프로젝트에 즉시 반영하고 싶음
- **컴포넌트 = npm**: 버전 관리로 breaking change 방지, 안정성 우선
- **규칙 = CDN+로컬**: 팀 공통 규칙은 CDN에서, 프로젝트별 커스텀은 로컬에서 확장

---

## 파일 역할

### `tokens.css`
> **단일 소스 역할**: 디자인 토큰(색상, 간격, 라디우스 등)의 유일한 정의 파일.

모든 프로젝트는 이 파일을 CDN으로 import하여 동일한 토큰 값을 사용한다.

```css
@import url('https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css');
```

### `components/`
> **단일 소스 역할**: 팀 공용 React 컴포넌트의 유일한 소스.

npm 패키지로 배포되며, 프로젝트에서 import하여 사용한다.

```bash
npm install @design-geniefy/ui
```

```tsx
import { Button } from '@design-geniefy/ui'
```

### `design-rules.md`
> **단일 소스 역할**: LLM이 UI 생성 시 준수해야 하는 제약 규칙과 프로토콜 정의.

`/setup-design` 커맨드가 이 파일을 프로젝트 로컬에 복사한다.
Claude Code는 `src/components/` 작업 시 이 규칙을 참조한다.

---

## 설치 및 사용

### 1. 자동 설정 (권장)

```bash
# Claude Code에서 실행
/setup-design
```

위 커맨드가 다음을 자동으로 처리:
- `globals.css`에 토큰 CDN import 추가
- `design-rules.md` 로컬 복사
- `@design-geniefy/ui` 패키지 설치
- `CLAUDE.md`에 규칙 참조 추가

### 2. 수동 설정

```css
/* globals.css */
@import url('https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css');
```

```bash
npm install @design-geniefy/ui
```

---

## 컴포넌트 사용 예제

### Button

```tsx
import { Button } from '@design-geniefy/ui';

// Variants: primary, secondary, outline, ghost, destructive
<Button variant="primary">저장</Button>
<Button variant="secondary">취소</Button>
<Button variant="outline">더보기</Button>
<Button variant="destructive">삭제</Button>

// Sizes: sm, md, lg
<Button size="sm">작은 버튼</Button>
<Button size="md">기본 버튼</Button>
<Button size="lg">큰 버튼</Button>

// Disabled
<Button disabled>비활성화</Button>
```

### Input

```tsx
import { Input } from '@design-geniefy/ui';

// Basic usage
<Input placeholder="이름을 입력하세요" />

// Sizes: sm, md, lg
<Input inputSize="sm" placeholder="작은 입력" />
<Input inputSize="md" placeholder="기본 입력" />
<Input inputSize="lg" placeholder="큰 입력" />

// Error state
<Input error placeholder="오류 상태" />

// Disabled
<Input disabled placeholder="비활성화" />
```

### 토큰 필수

컴포넌트가 올바르게 렌더링되려면 `tokens.css`가 로드되어야 합니다:

```css
/* globals.css 상단에 추가 */
@import url('https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css');
```

---

## 개발

```bash
npm run build    # TypeScript 컴파일 (dist/ 생성)
```

### 컴포넌트 추가

1. `components/{ComponentName}/` 폴더 생성
2. `index.ts`에서 export 추가
3. main 브랜치 push → GitHub Actions가 npm 자동 배포

### 토큰 수정

1. `tokens.css` 수정
2. main 브랜치 push → jsDelivr CDN에 즉시 반영

---

## 관련 링크

- [Linear 프로젝트](https://linear.app/geniefy/project/ax-조직을-위한-디자인-워크플로우-구축-7911e033ac99)
- [참고: designsystems.surf](https://designsystems.surf/design-systems)
