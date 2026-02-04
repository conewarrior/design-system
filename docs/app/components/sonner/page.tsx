'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Toaster } from '@components/sonner';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { toast } from 'sonner';

export default function SonnerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Sonner"
        description="사용자에게 알림을 표시하는 토스트"
      />

      <Toaster />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          다양한 타입의 토스트 알림을 표시할 수 있습니다.
        </p>
        <Container>
          <Button onClick={() => toast('기본 메시지입니다')}>
            Default
          </Button>
          <Button onClick={() => toast.success('성공적으로 완료되었습니다')}>
            Success
          </Button>
          <Button onClick={() => toast.error('오류가 발생했습니다')}>
            Error
          </Button>
          <Button onClick={() => toast.warning('주의가 필요합니다')}>
            Warning
          </Button>
          <Button onClick={() => toast.info('참고 정보입니다')}>
            Info
          </Button>
        </Container>
        <CodeBlock
          code={`import { toast } from 'sonner';

toast('기본 메시지입니다');
toast.success('성공적으로 완료되었습니다');
toast.error('오류가 발생했습니다');
toast.warning('주의가 필요합니다');
toast.info('참고 정보입니다');`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Description</h2>
        <p className="text-muted-foreground">
          제목과 함께 상세 설명을 추가할 수 있습니다.
        </p>
        <Container>
          <Button onClick={() => toast('이벤트가 생성되었습니다', { description: '2024년 1월 1일 오전 9시' })}>
            With Description
          </Button>
        </Container>
        <CodeBlock
          code={`toast('이벤트가 생성되었습니다', {
  description: '2024년 1월 1일 오전 9시',
});`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Action</h2>
        <p className="text-muted-foreground">
          토스트에 액션 버튼을 추가할 수 있습니다.
        </p>
        <Container>
          <Button onClick={() => toast('파일이 삭제되었습니다', {
            action: {
              label: '실행 취소',
              onClick: () => toast.success('삭제가 취소되었습니다'),
            },
          })}>
            With Action
          </Button>
        </Container>
        <CodeBlock
          code={`toast('파일이 삭제되었습니다', {
  action: {
    label: '실행 취소',
    onClick: () => toast.success('삭제가 취소되었습니다'),
  },
});`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Loading State</h2>
        <p className="text-muted-foreground">
          로딩 상태와 함께 Promise를 처리할 수 있습니다.
        </p>
        <Container>
          <Button onClick={() => {
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: '데이터 로딩 중...',
                success: '데이터 로딩 완료!',
                error: '데이터 로딩 실패',
              }
            );
          }}>
            Promise Toast
          </Button>
        </Container>
        <CodeBlock
          code={`toast.promise(fetchData(), {
  loading: '데이터 로딩 중...',
  success: '데이터 로딩 완료!',
  error: '데이터 로딩 실패',
});`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Toaster } from '@design-geniefy/ui';
import { toast } from 'sonner';

// 앱 최상위에 Toaster 추가
function App() {
  return (
    <>
      <Toaster />
      {/* 앱 컨텐츠 */}
    </>
  );
}

// 어디서든 toast 호출
function MyComponent() {
  return (
    <button onClick={() => toast.success('저장되었습니다!')}>
      저장
    </button>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
