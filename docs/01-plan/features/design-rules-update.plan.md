# design-rules-update Plan

- **작성일**: 2026-01-21
- **상태**: ✅ Completed
- **완료일**: 2026-01-21
- **작성자**: hskim

---

## 1. 개요

### 배경
현재 design-rules.md는 `.claude/skills/` 폴더에만 존재하며, 문서 사이트에서 내용을 확인할 수 없다. 팀원들이 어떤 규칙이 적용되는지 알려면 직접 파일을 열어봐야 하는 불편함이 있다.

또한 design-rules가 업데이트될 때 변경 이력이 남지 않아, 언제 어떤 규칙이 추가/수정되었는지 추적하기 어렵다.

### 목표
1. 문서 사이트에서 design-rules 전문을 볼 수 있도록 페이지 추가
2. design-rules 변경 시 changelog에 자동으로 기록되도록 구조화

---

## 2. 범위

### 포함
- design-rules 전문을 표시하는 페이지 (`/rules` 또는 `/design-rules`)
- design-rules 변경 로그 섹션
- 사이드바에 해당 페이지 링크 추가

### 제외
- design-rules 자체의 내용 수정 (별도 작업)
- 자동 동기화 (수동으로 업데이트)

---

## 3. 요구사항

### 기능 요구사항
1. `/rules` 페이지에서 design-rules.md 전문 표시
2. 규칙별로 섹션 구분 (토큰, 컴포넌트, Generation Protocol 등)
3. 변경 이력 섹션 (날짜, 변경 내용)
4. Sidebar "Foundations" 그룹에 "Design Rules" 링크 추가

### 비기능 요구사항
- 가독성: 규칙이 명확하게 구분되어 보여야 함
- 유지보수: design-rules.md 원본과 쉽게 동기화 가능해야 함

---

## 4. 제약사항

- 현재 design-rules.md는 `.claude/skills/`에 위치
- 문서 사이트는 `docs/` 폴더 기준으로 빌드됨
- Vercel 배포 시 docs 폴더 외부 파일 접근 불가

---

## 5. 성공 기준

- [x] `/rules` 페이지에서 design-rules 전문 확인 가능
- [x] 변경 이력 섹션 존재
- [x] 사이드바에서 접근 가능
- [x] 빌드 성공

---

## 6. 양방향 동기화 (구현 완료)

design-rules.md는 양방향 동기화를 지원합니다.

**다운스트림 (중앙 → 프로젝트):**
1. `npm install @geniefy/ui` 실행
2. `/setup-design` 명령어가 node_modules에서 `.claude/skills/`로 복사
3. Dependabot이 새 버전 감지 시 자동 PR + 머지

**업스트림 (프로젝트 → 중앙):**
1. 사용자가 `.claude/skills/design-rules.md` 수정
2. PostToolUse Hook이 변경 감지
3. `auto-contribute.sh`가 design-system 저장소에 자동 커밋

상세 내용은 [setup-design.plan.md](./setup-design.plan.md#4-양방향-동기화-흐름) 참조.

---

## 7. 참고자료

- [design-rules.md](/.claude/skills/design-rules.md) - 원본 파일
- [Sidebar.tsx](/docs/ui/Sidebar.tsx) - 사이드바 네비게이션
- [setup-design.plan.md](./setup-design.plan.md) - 양방향 동기화 상세
