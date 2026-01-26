# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- 통합 테스트 (EDU-5237)
- 팀 배포 및 피드백 수집 (EDU-5239)

---

## [0.0.1] - 2026-01-20

### Added

#### tokens.css (EDU-5230)
- **Spacing**: 8px 단위, 16개 토큰 (--spacing-0 ~ --spacing-24)
- **Radius**: 7개 토큰 (none, sm, md, lg, xl, 2xl, full)
- **Colors**:
  - Neutral: 11단계 (50~950)
  - Primary (Orange): 11단계, 기본값 #f97316
  - Semantic: success, warning, error, info
  - Aliases: background, foreground, muted, border, primary 등
- **Typography**: font-size 10단계, line-height 3단계, font-weight 4단계
- **Dark Mode**: `.dark` 클래스로 semantic aliases 오버라이드

#### design-rules.md v1 (EDU-5231)
- **모호 표현 금지**: 예쁘게, 모던하게, 깔끔하게 등 6가지
- **필수 제약 5가지**:
  - C-2.1: radius 토큰만 사용
  - C-2.2: 8px 단위 간격 토큰
  - C-2.3: tokens.css 색상만 사용
  - C-2.4: 화면당 컴포넌트 ≤ 7
  - C-2.5: 화면당 색상 ≤ 3 (텍스트 제외)
- **Generation Protocol 4단계**: Purpose → Selection → Validation → Rejection
- **토큰 참조 예시**: 버튼, 카드, 입력 필드

#### Components v0 (EDU-5232)
- **Button**: variant (primary/secondary/outline/ghost/destructive), size (sm/md/lg)
- **Input**: inputSize (sm/md/lg), error 상태 지원
- 모든 스타일 CSS 변수 기반 (하드코딩 없음)

#### 저장소 구조 (EDU-5229)
- `tokens.css`: CDN 배포 (jsDelivr)
- `components/`: npm 패키지 (@design-geniefy/ui)
- `design-rules.md`: CDN + 로컬 복사 방식

### Infrastructure
- TypeScript 설정 (tsconfig.json)
- npm 패키지 구성 (package.json)
- GitHub Actions 배포 워크플로우

---

## Related Tools

### /setup-design 커맨드 (EDU-5234, EDU-5235)
프로젝트에 디자인 시스템 자동 설정:
1. design-rules.md CDN 다운로드
2. CLAUDE.md 규칙 참조 추가
3. globals.css 토큰 import
4. @design-geniefy/ui npm 설치
5. settings.local.json hook 설정

### ui-generation 스킬 (EDU-5236)
src/components/ 작업 시 Generation Protocol 자동 적용:
- 토큰/컴포넌트 선택 검증
- 제약 위반 시 거부/수정 루프
- 위반 항목 로그 리포트

---

## Links

- [Linear 프로젝트](https://linear.app/geniefy/project/ax-조직을-위한-디자인-워크플로우-구축-7911e033ac99)
- CDN: `https://cdn.jsdelivr.net/gh/conewarrior/design-system@main/tokens.css`
- npm: `@design-geniefy/ui`
