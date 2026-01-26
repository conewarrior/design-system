# Design Rules Skill

> UI/컴포넌트 생성 요청 시 자동으로 적용되는 디자인 규칙

## 트리거 키워드
UI, 컴포넌트, 버튼, 카드, 폼, 레이아웃, 스타일, CSS, 디자인, Button, Input, Modal

---

## 1. 필수 제약

### 1.1 색상 (Colors)
**tokens.css 변수만 사용. 하드코딩 금지.**

```css
/* ✅ 올바른 사용 */
color: var(--color-foreground);
background: var(--color-primary);
border-color: var(--color-border);

/* ❌ 금지 */
color: #333;
background: rgb(255, 255, 255);
border-color: gray;
```

**의미 기반 토큰:**
- `--color-foreground`: 기본 텍스트
- `--color-muted`: 보조 텍스트
- `--color-background`: 기본 배경
- `--color-primary`: 주요 액션
- `--color-destructive`: 위험/삭제

### 1.2 간격 (Spacing)
**8px 단위 토큰만 사용.**

```css
/* ✅ 올바른 사용 */
padding: var(--spacing-4);      /* 32px */
margin: var(--spacing-2);       /* 16px */
gap: var(--spacing-3);          /* 24px */

/* ❌ 금지 */
padding: 30px;
margin: 1.5rem;
```

**주요 토큰:**
- `--spacing-1`: 8px
- `--spacing-2`: 16px
- `--spacing-3`: 24px
- `--spacing-4`: 32px

### 1.3 Border Radius
**토큰만 사용.**

```css
/* ✅ 올바른 사용 */
border-radius: var(--radius-md);  /* 8px, 기본값 */
border-radius: var(--radius-lg);  /* 12px, 카드/모달 */
border-radius: var(--radius-full); /* 원형, 아바타 */

/* ❌ 금지 */
border-radius: 5px;
```

### 1.4 화면당 컴포넌트 수
**최대 7개** (Miller's Law)

7개 초과 시:
1. 그룹화하여 상위 컴포넌트로 묶기
2. 탭/아코디언으로 숨기기
3. 별도 페이지로 분리

### 1.5 화면당 색상 수
**배경/강조 색상 최대 3개** (텍스트 색상 제외)

---

## 2. Generation Protocol

UI 생성 시 반드시 다음 4단계를 수행합니다.

### Step 1: 목적 파악
- 이 UI의 주요 사용자 액션은?
- 어떤 정보를 전달해야 하는가?
- @design-geniefy/ui 컴포넌트로 해결 가능한가?

### Step 2: 토큰/컴포넌트 선택
```
체크리스트:
- [ ] 사용할 색상 토큰 (최대 3개)
- [ ] 사용할 간격 토큰
- [ ] 사용할 radius 토큰
- [ ] @design-geniefy/ui에서 재사용할 컴포넌트
```

### Step 3: 검증
```
검증 체크리스트:
- [ ] 하드코딩 색상 없음
- [ ] 하드코딩 간격 없음
- [ ] radius는 토큰 사용
- [ ] 컴포넌트 수 ≤ 7
- [ ] 색상 수 ≤ 3
```

### Step 4: 위반 시 거부
검증 실패 시 생성을 거부하고 수정합니다.

```
❌ 제약 위반 발견

위반 항목:
1. [C-1.1] 하드코딩 색상: color: #333 → var(--color-foreground) 사용
2. [C-1.2] 임의 간격: padding: 30px → var(--spacing-4) 사용

수정 후 다시 검증합니다.
```

---

## 3. 토큰 보호 규칙 (Token Safety)

### 3.1 토큰 삭제 금지
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

### 3.2 토큰 변경 시 검증 체크리스트
```
토큰 변경 전 확인:
- [ ] 삭제하려는 토큰을 사용 중인 프로젝트가 없는가?
- [ ] 토큰명 변경 시 모든 프로젝트에서 동시 업데이트 가능한가?
- [ ] 대체 토큰이 있다면 마이그레이션 가이드를 작성했는가?
- [ ] CODEOWNERS 리뷰를 받았는가?
```

### 3.3 Safety Guard 체계
| 보호 장치 | 역할 |
|----------|------|
| CODEOWNERS | tokens.css 변경 시 관리자 리뷰 필수 |
| token-change-check.yml | PR에서 토큰 삭제 감지 및 경고 |
| Generation Protocol | 토큰 미사용 코드 생성 차단 |

---

## 4. 컴포넌트 사용 규칙

### 4.1 @design-geniefy/ui 우선 사용
```tsx
// ✅ 올바른 사용
import { Button, Input } from '@design-geniefy/ui';

// ❌ 금지: 동일 기능 중복 생성
const MyButton = () => <button>...</button>;
```

### 4.2 커스텀 컴포넌트 생성 시
@design-geniefy/ui에 없는 컴포넌트만 생성하며, 토큰 규칙을 준수합니다.

```tsx
const StatCard = ({ label, value }) => (
  <div style={{
    padding: 'var(--spacing-3)',
    background: 'var(--color-secondary)',
    borderRadius: 'var(--radius-lg)',
  }}>
    <span style={{ color: 'var(--color-muted)' }}>{label}</span>
    <span style={{ color: 'var(--color-foreground)' }}>{value}</span>
  </div>
);
```

---

## 5. 토큰 참조

CDN: `https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css`

### 색상
| 토큰 | 용도 |
|------|------|
| `--color-foreground` | 기본 텍스트 |
| `--color-muted` | 보조 텍스트 |
| `--color-background` | 기본 배경 |
| `--color-primary` | 주요 액션, 브랜드 |
| `--color-secondary` | 보조 배경 |
| `--color-border` | 테두리 |
| `--color-destructive` | 위험/삭제 |

### 간격
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--spacing-1` | 8px | 인라인 요소 |
| `--spacing-2` | 16px | 컴포넌트 내부 |
| `--spacing-3` | 24px | 카드 패딩 |
| `--spacing-4` | 32px | 섹션 간격 |

### Radius
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--radius-sm` | 4px | 태그, 뱃지 |
| `--radius-md` | 8px | 버튼, 인풋 |
| `--radius-lg` | 12px | 카드, 모달 |
| `--radius-full` | 9999px | 아바타 |
