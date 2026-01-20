# Data Model Design

## Overview

디자인 시스템은 백엔드 데이터 모델이 필요하지 않으나, bkend.ai를 사용하는 프로젝트를 위한 템플릿을 제공한다.

## Collection Template (bkend.ai)

bkend.ai를 사용하는 프로젝트에서 참고할 수 있는 기본 컬렉션 구조:

```typescript
// Example: User collection
interface User {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Example: Settings collection
interface UserSettings {
  _id: string;
  userId: string;
  theme: 'light' | 'dark' | 'system';
  language: string;
}
```

## Entity Relationships

```
[User] 1 --- 1 [UserSettings]
```

---

*Created: 2026-01-20*
