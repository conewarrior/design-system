# Design Rules v1

> **단일 소스 역할**: LLM이 UI를 생성할 때 반드시 준수해야 하는 제약 규칙과 Generation Protocol을 정의한다.

이 문서는 Claude Code가 `src/components/` 내에서 UI를 생성할 때 참조하는 제약 규칙이다.
**규칙 위반 시 생성을 거부하고 수정을 요청해야 한다.**

---

## 1. 모호 표현 금지

다음과 같은 모호한 표현은 사용하지 않는다. 대신 구체적인 토큰이나 수치를 사용한다.

| ❌ 금지 표현 | ✅ 대체 표현 |
|-------------|-------------|
| "예쁘게" | 구체적인 토큰 조합 명시 |
| "모던하게" | `--radius-md`, `--spacing-4` 등 토큰 사용 |
| "깔끔하게" | 여백과 정렬 토큰 명시 |
| "적당히" | 정확한 토큰 값 사용 |
| "보기 좋게" | 구체적인 레이아웃 규칙 적용 |
| "자연스럽게" | 명시적인 트랜지션/애니메이션 값 |

**원칙**: 모든 시각적 속성은 `tokens.css`의 변수로 표현 가능해야 한다.

---

## 2. 필수 제약 (Constraints)

### 2.1 Border Radius

```css
/* 기본값: --radius-md (8px) */
border-radius: var(--radius-md);
```

| 예외 상황 | 허용 값 |
|----------|---------|
| 아바타, 토글 | `var(--radius-full)` |
| 태그, 뱃지 | `var(--radius-sm)` |
| 카드, 모달 | `var(--radius-lg)` |
| 대형 컨테이너 | `var(--radius-xl)` 또는 `var(--radius-2xl)` |

**금지**: 임의의 px 값 (`border-radius: 5px`) 사용 불가

### 2.2 간격 (Spacing)

모든 간격은 8px 단위 토큰만 사용한다.

```css
/* ✅ 올바른 사용 */
padding: var(--spacing-4);      /* 32px */
margin: var(--spacing-2);       /* 16px */
gap: var(--spacing-3);          /* 24px */

/* ❌ 금지 */
padding: 30px;                  /* 임의의 값 */
margin: 1.5rem;                 /* rem 단위 */
gap: 10px;                      /* 8px 단위 아님 */
```

**토큰 예시**:
- `--spacing-1`: 8px (인라인 요소 간격)
- `--spacing-2`: 16px (컴포넌트 내부 패딩)
- `--spacing-3`: 24px (카드 패딩)
- `--spacing-4`: 32px (섹션 간격)

### 2.3 색상 (Colors)

`tokens.css` 외부의 색상 도입 금지.

```css
/* ✅ 올바른 사용 */
color: var(--color-foreground);
background: var(--color-background);
border-color: var(--color-border);

/* ❌ 금지 */
color: #333;                    /* 하드코딩 */
background: rgb(255, 255, 255); /* rgb 직접 사용 */
border-color: gray;             /* 키워드 사용 */
```

**의미 기반 토큰 우선 사용**:
- `--color-foreground`: 기본 텍스트
- `--color-muted`: 보조 텍스트
- `--color-background`: 기본 배경
- `--color-primary`: 주요 액션
- `--color-destructive`: 위험/삭제 액션

### 2.4 화면당 컴포넌트 수

**최대 7개** (± 2 Miller's Law)

```
✅ 좋은 예: 헤더 + 히어로 + 카드 3개 + CTA + 푸터 = 7개
❌ 나쁜 예: 10개 이상의 독립 섹션
```

7개 초과 시:
1. 그룹화하여 상위 컴포넌트로 묶기
2. 탭/아코디언으로 숨기기
3. 별도 페이지로 분리

### 2.5 화면당 색상 수

**최대 3개** (텍스트 색상 제외)

```
✅ 좋은 예: primary(오렌지) + secondary(회색) + accent(흰색 배경)
❌ 나쁜 예: 빨강 + 파랑 + 초록 + 보라 + 노랑
```

**텍스트 색상은 예외**:
- `--color-foreground` (기본)
- `--color-muted` (보조)
- `--color-primary` (링크/강조)

---

## 3. Generation Protocol

UI 생성 시 반드시 다음 4단계를 순서대로 수행한다.

### Step 1: 목적 파악 (Purpose)

생성 요청의 목적을 명확히 한다.

```
질문:
- 이 UI의 주요 사용자 액션은 무엇인가?
- 어떤 정보를 전달해야 하는가?
- 기존 컴포넌트로 해결 가능한가?
```

### Step 2: 토큰/컴포넌트 선택 (Selection)

tokens.css와 @geniefy/ui에서 사용할 요소를 선택한다.

```
체크리스트:
- [ ] 사용할 색상 토큰 목록 (최대 3개)
- [ ] 사용할 간격 토큰 목록
- [ ] 사용할 radius 토큰
- [ ] @geniefy/ui 컴포넌트 중 재사용 가능한 것
```

**토큰 선택 예시**:
```css
/* 카드 컴포넌트 */
--color-background      /* 배경 */
--color-foreground      /* 제목 텍스트 */
--color-muted           /* 설명 텍스트 */
--spacing-3             /* 내부 패딩 (24px) */
--spacing-2             /* 요소 간 간격 (16px) */
--radius-lg             /* 모서리 (12px) */
```

### Step 3: 검증 (Validation)

생성된 코드가 제약을 준수하는지 검증한다.

```
검증 체크리스트:
- [ ] 하드코딩된 색상 없음 (#fff, rgb 등)
- [ ] 하드코딩된 간격 없음 (px, rem 직접 사용)
- [ ] radius는 토큰 사용
- [ ] 컴포넌트 수 ≤ 7
- [ ] 배경/강조 색상 수 ≤ 3
- [ ] 모호한 주석 없음 ("예쁘게" 등)
```

### Step 4: 위반 시 거부 (Rejection)

검증 실패 시 생성을 거부하고 수정한다.

```
거부 응답 형식:

❌ 제약 위반 발견

위반 항목:
1. [C-2.3] 하드코딩 색상: `color: #333` → `var(--color-foreground)` 사용
2. [C-2.2] 임의 간격: `padding: 30px` → `var(--spacing-4)` 사용

수정 후 다시 검증합니다.
```

---

## 4. 토큰 참조 예시

### 예시 1: 기본 버튼

```css
.button {
  /* 간격 */
  padding: var(--spacing-1-5) var(--spacing-3);  /* 12px 24px */

  /* 색상 */
  background: var(--color-primary);
  color: var(--color-primary-foreground);

  /* 형태 */
  border-radius: var(--radius-md);  /* 8px */

  /* 타이포그래피 */
  font-size: var(--font-size-sm);   /* 14px */
  font-weight: var(--font-weight-medium);
}

.button:hover {
  background: var(--primary-600);  /* 한 단계 어두운 톤 */
}
```

### 예시 2: 카드 컴포넌트

```css
.card {
  /* 간격 */
  padding: var(--spacing-3);        /* 24px */

  /* 색상 */
  background: var(--color-background);
  border: 1px solid var(--color-border);

  /* 형태 */
  border-radius: var(--radius-lg);  /* 12px */
}

.card-title {
  color: var(--color-foreground);
  font-size: var(--font-size-lg);   /* 18px */
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);  /* 8px */
}

.card-description {
  color: var(--color-muted);
  font-size: var(--font-size-sm);   /* 14px */
}
```

### 예시 3: 입력 필드

```css
.input {
  /* 간격 */
  padding: var(--spacing-1-5) var(--spacing-2);  /* 12px 16px */

  /* 색상 */
  background: var(--color-background);
  color: var(--color-foreground);
  border: 1px solid var(--color-input);

  /* 형태 */
  border-radius: var(--radius-md);  /* 8px */

  /* 타이포그래피 */
  font-size: var(--font-size-base); /* 16px */
}

.input:focus {
  border-color: var(--color-ring);
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}

.input::placeholder {
  color: var(--color-muted);
}
```

---

## 5. 토큰 보호 규칙 (Token Safety)

CDN으로 즉시 반영되는 tokens.css의 Breaking Change를 방지하기 위한 규칙.

### 5.1 토큰 삭제 금지

**기존 토큰명을 삭제하거나 변경하면 Breaking Change 발생**

```css
/* ❌ 금지: 기존 토큰 삭제 */
/* --color-primary 삭제 시 모든 프로젝트 스타일 깨짐 */

/* ❌ 금지: 기존 토큰명 변경 */
/* --color-primary → --color-brand 변경 불가 */

/* ✅ 허용: 새 토큰 추가 */
--color-brand: #327039;  /* 새 토큰 추가는 안전 */

/* ✅ 허용: 기존 토큰 값 변경 */
--color-primary: #327039;  /* 값 변경은 의도적 디자인 변경 */
```

### 5.2 토큰 변경 시 검증 체크리스트

```
토큰 변경 전 확인:
- [ ] 삭제하려는 토큰을 사용 중인 프로젝트가 없는가?
- [ ] 토큰명 변경 시 모든 프로젝트에서 동시 업데이트 가능한가?
- [ ] 대체 토큰이 있다면 마이그레이션 가이드를 작성했는가?
- [ ] CODEOWNERS 리뷰를 받았는가?
```

### 5.3 Safety Guard 체계

| 보호 장치 | 파일 | 역할 |
|----------|------|------|
| CODEOWNERS | `.github/CODEOWNERS` | tokens.css 변경 시 관리자 리뷰 필수 |
| CI Check | `.github/workflows/token-change-check.yml` | PR에서 토큰 삭제 감지 및 경고 |
| Generation Protocol | Step 3 검증 | 토큰 미사용 코드 생성 차단 |

---

## 6. 컴포넌트 사용 규칙

### 6.1 @geniefy/ui 우선 사용

동일 기능의 컴포넌트가 `@geniefy/ui`에 있으면 반드시 사용한다.

```tsx
// ✅ 올바른 사용
import { Button, Card, Input } from '@geniefy/ui';

// ❌ 금지: 동일 기능 컴포넌트 중복 생성
const MyButton = () => <button className="...">...</button>;
```

### 6.2 커스텀 컴포넌트 생성 시

@geniefy/ui에 없는 컴포넌트만 생성하며, 토큰 규칙을 준수한다.

```tsx
// 커스텀 컴포넌트 예시
const StatCard = ({ label, value }) => (
  <div style={{
    padding: 'var(--spacing-3)',
    background: 'var(--color-secondary)',
    borderRadius: 'var(--radius-lg)',
  }}>
    <span style={{ color: 'var(--color-muted)', fontSize: 'var(--font-size-sm)' }}>
      {label}
    </span>
    <span style={{ color: 'var(--color-foreground)', fontSize: 'var(--font-size-2xl)' }}>
      {value}
    </span>
  </div>
);
```

---

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|------|------|-----------|
| 2026-01-19 | v0.1 | 초기 스캐폴딩 (구조만) |
| 2026-01-19 | v1.0 | 모호 표현 금지, 필수 제약 5가지, Generation Protocol 4단계, 토큰 예시 추가 |
| 2026-01-22 | v1.1 | Token Safety 섹션 추가 (CODEOWNERS, CI Check, 토큰 보호 규칙) |
