# API Specification

## Overview

디자인 시스템은 프론트엔드 라이브러리로, 자체 API가 없다.
bkend.ai MCP를 사용하는 프로젝트에서 참고할 API 명세 템플릿.

## Endpoint Template

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/signup | 회원가입 |
| POST | /auth/login | 로그인 |
| POST | /auth/logout | 로그아웃 |
| GET | /auth/me | 현재 사용자 조회 |

### Resources

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/{resource} | 목록 조회 |
| GET | /api/{resource}/:id | 단일 조회 |
| POST | /api/{resource} | 생성 |
| PUT | /api/{resource}/:id | 수정 |
| DELETE | /api/{resource}/:id | 삭제 |

## Response Format

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
```

---

*Created: 2026-01-20*
