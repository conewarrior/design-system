# Design System 문서 사이트 구축 계획

- **작성일**: 2026-01-20
- **상태**: 📋 Planning

---

## 1. 배경 및 문제 정의

### 현재 상황
design-system 저장소는 다음과 같이 배포됨:
- `tokens.css` → CDN (jsDelivr)
- `components/` → npm 패키지 (@geniefy/ui)
- `design-rules.md` → CDN

### 문제점
- **개발자**: 코드로 확인 가능
- **비개발자/디자이너**: 확인할 방법이 없음
- 새 컴포넌트가 추가되어도 시각적으로 확인 불가
- 토큰 값(색상, 간격 등)을 한눈에 보기 어려움

### 요구사항
1. 컴포넌트를 시각적으로 미리보기
2. 토큰 값들을 시각화 (색상표, 간격 그리드 등)
3. 비개발자도 URL로 접근 가능
4. 컴포넌트 추가 시 자동 반영

---

## 2. 검토한 옵션

### 옵션 1: Storybook
컴포넌트 문서화 표준 도구

**장점:**
- 인터랙티브 미리보기
- props 변경하며 실시간 확인
- GitHub Pages, Vercel, Chromatic 배포 지원

**단점:**
- UI가 복잡하고 직관적이지 않음
- 구조가 정해져 있어 커스텀 어려움
- 비개발자에게 친숙하지 않음

### 옵션 2: 전용 문서 사이트 (Next.js) ✅ 선택
직접 구축하는 문서 사이트

**장점:**
- 완전한 커스텀 가능
- 같은 저장소 컴포넌트 직접 import
- Vercel 배포로 PR 프리뷰 자동 생성
- 브랜딩/디자인 자유도 높음

**단점:**
- 초기 구축 비용
- 문서용 컴포넌트 직접 개발 필요

### 옵션 3: Figma Tokens 연동
디자이너용 Figma 플러그인 연동

**장점:**
- 디자이너가 Figma에서 직접 확인

**단점:**
- 개발자/PM은 Figma 필요
- 컴포넌트 미리보기 불가
- 토큰만 동기화 가능

---

## 3. 선택: 전용 문서 사이트 (Next.js)

### 결정 이유
1. **커스텀 자유도**: Storybook의 정해진 UI 대신 원하는 형태로 구성
2. **직접 연동**: 같은 저장소의 컴포넌트를 바로 import
3. **Vercel 배포**: PR마다 프리뷰, main 머지 시 자동 배포
4. **접근성**: URL만 공유하면 누구나 확인 가능

---

## 4. 폴더 구조

```
design-system/
├── components/           # npm 패키지 소스 (기존)
│   ├── Button/
│   │   └── index.tsx
│   └── Input/
│       └── index.tsx
├── tokens.css            # 디자인 토큰 (기존)
├── design-rules.md       # 디자인 규칙 (기존)
├── index.ts              # exports (기존)
├── package.json          # @geniefy/ui (기존)
│
├── docs/                 # 📌 문서 사이트 (새로 추가)
│   ├── app/
│   │   ├── layout.tsx            # 공통 레이아웃
│   │   ├── page.tsx              # 메인: 개요
│   │   ├── tokens/
│   │   │   └── page.tsx          # 토큰 시각화
│   │   └── components/
│   │       ├── page.tsx          # 컴포넌트 목록
│   │       ├── button/
│   │       │   └── page.tsx      # Button 문서
│   │       └── input/
│   │           └── page.tsx      # Input 문서
│   ├── components/               # 문서용 UI 컴포넌트
│   │   ├── Preview.tsx           # 컴포넌트 미리보기 박스
│   │   ├── CodeBlock.tsx         # 코드 블록 (syntax highlight)
│   │   ├── PropsTable.tsx        # Props 테이블
│   │   ├── ColorGrid.tsx         # 색상 팔레트 그리드
│   │   ├── SpacingScale.tsx      # 간격 스케일 시각화
│   │   └── Sidebar.tsx           # 사이드바 네비게이션
│   ├── styles/
│   │   └── globals.css           # 문서 사이트 스타일
│   ├── package.json
│   ├── next.config.js
│   └── tsconfig.json
│
├── vercel.json           # Vercel 배포 설정
└── CHANGELOG.md
```

---

## 5. 페이지 구성

| 경로 | 페이지 | 내용 |
|------|--------|------|
| `/` | 개요 | 디자인 시스템 소개, 설치 방법, 빠른 시작 |
| `/tokens` | 토큰 | 색상표, 간격 스케일, radius, typography |
| `/components` | 컴포넌트 목록 | 전체 컴포넌트 카드 그리드 |
| `/components/button` | Button | 변형별 미리보기, Props 테이블, 사용 예시 |
| `/components/input` | Input | 크기별/상태별 미리보기, Props 테이블 |

### 페이지 상세

#### 메인 페이지 (`/`)
- 디자인 시스템 소개
- 설치 방법 (npm, CDN)
- 빠른 시작 코드 예시
- 최근 업데이트 (CHANGELOG 연동)

#### 토큰 페이지 (`/tokens`)
- **Colors**: Neutral, Primary, Semantic 색상표
- **Spacing**: 8px 단위 간격 시각화
- **Radius**: 각 radius 적용 예시
- **Typography**: font-size, line-height, weight

#### 컴포넌트 페이지 (`/components/[name]`)
- 컴포넌트 설명
- 인터랙티브 미리보기 (variant, size 선택)
- Props 테이블 (타입, 기본값, 설명)
- 코드 예시 (복사 버튼)

---

## 6. 컴포넌트 연동 방식

### 직접 Import
문서 사이트에서 같은 저장소의 컴포넌트를 직접 import:

```tsx
// docs/app/components/button/page.tsx
import { Button } from '../../../../components/Button';

export default function ButtonPage() {
  return (
    <div>
      <h1>Button</h1>

      {/* 변형별 미리보기 */}
      <Preview title="Variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </Preview>

      {/* 크기별 미리보기 */}
      <Preview title="Sizes">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Preview>

      {/* Props 테이블 */}
      <PropsTable
        props={[
          { name: 'variant', type: 'primary | secondary | outline | ghost | destructive', default: 'primary' },
          { name: 'size', type: 'sm | md | lg', default: 'md' },
          { name: 'disabled', type: 'boolean', default: 'false' },
        ]}
      />

      {/* 코드 예시 */}
      <CodeBlock language="tsx">
        {`import { Button } from '@geniefy/ui';

<Button variant="primary" size="md">
  Click me
</Button>`}
      </CodeBlock>
    </div>
  );
}
```

### 토큰 시각화
tokens.css를 파싱하여 동적으로 표시:

```tsx
// docs/app/tokens/page.tsx
import { ColorGrid } from '../../components/ColorGrid';
import { SpacingScale } from '../../components/SpacingScale';

const colors = {
  neutral: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  primary: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
};

export default function TokensPage() {
  return (
    <div>
      <h1>Design Tokens</h1>

      <section>
        <h2>Colors</h2>
        <ColorGrid colors={colors} />
      </section>

      <section>
        <h2>Spacing</h2>
        <SpacingScale />
      </section>
    </div>
  );
}
```

---

## 7. Vercel 배포 설정

### vercel.json
```json
{
  "buildCommand": "cd docs && npm install && npm run build",
  "outputDirectory": "docs/.next",
  "framework": "nextjs",
  "installCommand": "cd docs && npm install"
}
```

### 배포 흐름
```
1. PR 생성 → Vercel Preview 배포 (프리뷰 URL 생성)
2. PR 리뷰 → 프리뷰에서 변경사항 확인
3. main 머지 → Production 자동 배포
```

### 도메인 (예시)
- Production: `design.geniefy.ai` 또는 `design-system.vercel.app`
- Preview: `design-system-{branch}-{team}.vercel.app`

---

## 8. 문서용 UI 컴포넌트

### Preview.tsx
컴포넌트 미리보기 박스

```tsx
interface PreviewProps {
  title?: string;
  children: React.ReactNode;
  background?: 'light' | 'dark' | 'checker';
}

export function Preview({ title, children, background = 'light' }: PreviewProps) {
  return (
    <div className="preview">
      {title && <h3>{title}</h3>}
      <div className={`preview-box preview-${background}`}>
        {children}
      </div>
    </div>
  );
}
```

### ColorGrid.tsx
색상 팔레트 그리드

```tsx
export function ColorGrid({ colors }: { colors: Record<string, string[]> }) {
  return (
    <div className="color-grid">
      {Object.entries(colors).map(([name, shades]) => (
        <div key={name} className="color-row">
          <span className="color-name">{name}</span>
          {shades.map((shade) => (
            <div
              key={shade}
              className="color-swatch"
              style={{ background: `var(--color-${name}-${shade})` }}
            >
              <span>{shade}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

### PropsTable.tsx
Props 문서 테이블

```tsx
interface Prop {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name}>
            <td><code>{prop.name}</code></td>
            <td><code>{prop.type}</code></td>
            <td>{prop.default ? <code>{prop.default}</code> : '-'}</td>
            <td>{prop.description || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## 9. 구현 단계

### Phase 1: 기본 구조 (MVP)
- [ ] docs/ 폴더 생성 및 Next.js 초기화
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
- [ ] 컴포넌트 자동 탐지 (새 컴포넌트 추가 시 자동 목록 갱신)

---

## 10. 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (App Router) |
| 스타일링 | CSS Variables (tokens.css 활용) |
| 코드 하이라이트 | Prism.js 또는 Shiki |
| 배포 | Vercel |
| 패키지 매니저 | npm (저장소 통일) |

---

## 11. 참고

- [Radix UI Docs](https://www.radix-ui.com/) - 컴포넌트 문서 구조 참고
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - 토큰 시각화 참고
- [shadcn/ui](https://ui.shadcn.com/) - 미니멀한 문서 디자인 참고
