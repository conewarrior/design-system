# Version Adoption Dashboard 기능 계획

> **경로**: `/updates`
> **목적**: 조직 내 프로젝트들의 @design-geniefy/ui 버전 채택 현황 추적

- **작성일**: 2026-01-21
- **상태**: 📋 Planning

---

## 1. 배경 및 문제 정의

### 현재 상황
- @design-geniefy/ui 패키지가 여러 프로젝트에서 사용됨
- Dependabot으로 자동 업데이트 PR이 생성됨
- 각 프로젝트의 업데이트 현황을 파악하기 어려움

### 문제점
- 어떤 프로젝트가 최신 버전인지 한눈에 파악 불가
- 업데이트 실패/지연된 프로젝트 추적 어려움
- 조직 전체의 디자인 시스템 채택률 측정 불가
- Breaking change 영향 범위 파악 어려움

### 요구사항
1. 모든 프로젝트의 @design-geniefy/ui 버전 현황 시각화
2. 업데이트 대기/완료/실패 상태 표시
3. 버전별 채택률 통계
4. 알림 기능 (Slack/Discord 연동)

### 관련 기능
- [changelog.plan.md](./changelog.plan.md) - 컴포넌트 변경 로그

---

## 2. 검토한 옵션

### 옵션 1: GitHub Insights 활용
GitHub 기본 제공 Dependabot Insights

**장점:**
- 별도 구축 불필요
- GitHub UI에서 바로 확인

**단점:**
- 조직 전체 뷰 제공 안 함
- 커스터마이징 불가
- @design-geniefy/ui만 필터링 어려움

### 옵션 2: 전용 대시보드 구축 ✅ 선택
Next.js + GitHub API로 커스텀 대시보드

**장점:**
- 완전한 커스터마이징
- @design-geniefy/ui 전용 뷰
- 알림 기능 연동 가능
- 문서 사이트에 통합 가능

**단점:**
- 초기 개발 비용
- GitHub API Rate Limit 고려 필요

### 옵션 3: Third-party 서비스 (Snyk, Renovate Dashboard)
외부 의존성 관리 서비스

**장점:**
- 기능이 풍부함

**단점:**
- 유료
- @design-geniefy/ui 전용 커스터마이징 제한

---

## 3. 선택: 전용 대시보드 (문서 사이트 통합)

### 결정 이유
1. **문서 사이트 통합**: 기존 docs/ 사이트에 `/updates` 페이지로 추가
2. **@design-geniefy/ui 전용**: 딱 필요한 정보만 표시
3. **실시간 데이터**: GitHub API로 최신 정보 조회
4. **알림 연동**: Slack webhook으로 업데이트 현황 공유

---

## 4. 기능 정의

### 4.1 메인 대시보드 (`/updates`)

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 @design-geniefy/ui 업데이트 현황                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  최신 버전: 0.0.3                           업데이트: 2026-01-21 │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📈 버전 분포                                           │   │
│  │  ████████████████████░░░░░  0.0.3 (80%)               │   │
│  │  ████░░░░░░░░░░░░░░░░░░░░░  0.0.2 (15%)               │   │
│  │  █░░░░░░░░░░░░░░░░░░░░░░░░  0.0.1 (5%)                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  프로젝트 현황                                          │   │
│  │                                                         │   │
│  │  ✅ project-a          0.0.3    최신                   │   │
│  │  ✅ project-b          0.0.3    최신                   │   │
│  │  ⏳ project-c          0.0.2    PR 대기 (#123)         │   │
│  │  ❌ project-d          0.0.1    업데이트 필요           │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 프로젝트 상태

| 상태 | 아이콘 | 설명 |
|------|--------|------|
| 최신 | ✅ | 최신 버전 사용 중 |
| PR 대기 | ⏳ | Dependabot PR 생성됨, 리뷰/머지 대기 |
| 업데이트 필요 | ❌ | 구버전 사용, PR 없음 |
| CI 실패 | 🔴 | PR 생성됐으나 CI 실패 |

### 4.3 알림 기능

**트리거:**
- 새 버전 배포 시
- 모든 프로젝트 업데이트 완료 시
- 특정 프로젝트 CI 실패 시

**채널:**
- Slack webhook
- Discord webhook (선택)

---

## 5. 데이터 소스

### 5.1 GitHub API 활용

```typescript
// 1. 최신 버전 조회
GET /repos/geniefy/design-system/releases/latest

// 2. 조직 내 저장소 목록
GET /orgs/geniefy/repos

// 3. 각 저장소의 package.json
GET /repos/{owner}/{repo}/contents/package.json

// 4. Dependabot PR 목록
GET /repos/{owner}/{repo}/pulls?state=open&head=dependabot
```

### 5.2 Rate Limit 대응

- 캐싱: 5분 간격 갱신
- 조건부 요청: ETag/If-Modified-Since 활용
- 배치 처리: GraphQL API 사용 고려

---

## 6. 구현 단계

### Phase 1: MVP ✅
- [x] `/updates` 페이지 생성
- [x] 최신 버전 표시
- [x] 프로젝트 목록 (하드코딩)
- [x] 버전 비교 표시

### Phase 2: 자동화 ✅
- [x] GitHub API 연동 (`docs/scripts/generate-updates.js`)
- [x] 실시간 PR 상태 조회 (Dependabot PR 감지)
- [x] 버전 분포 차트
- [x] 캐싱 구현 (ISR 10분)

### Phase 3: 알림
- [ ] Slack webhook 연동
- [ ] 주간 리포트 자동 발송
- [ ] CI 실패 알림

---

## 7. 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (기존 docs 사이트) |
| API | GitHub REST API / GraphQL |
| 캐싱 | Next.js ISR 또는 Redis |
| 차트 | Recharts 또는 Chart.js |
| 알림 | Slack Incoming Webhook |

---

## 8. 검증 방법

1. **기능 테스트**
   - 프로젝트 목록 정확성
   - 버전 비교 로직
   - PR 상태 표시

2. **성능 테스트**
   - API 응답 시간
   - Rate Limit 도달 여부
   - 캐싱 효과

3. **알림 테스트**
   - Slack 메시지 전송
   - 메시지 포맷 확인

---

## 9. 고려사항

### 보안
- GitHub Token: 서버사이드에서만 사용
- 읽기 전용 권한만 필요

### 확장성
- 조직 규모 증가 시 페이지네이션 필요
- GraphQL로 마이그레이션 고려

### 접근성
- 로그인 없이 조회 가능 (공개 대시보드)
- 또는 조직 멤버만 접근 (인증 필요)

---

## 10. 참고

- [GitHub REST API](https://docs.github.com/en/rest)
- [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)
- [Next.js ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
