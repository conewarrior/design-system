import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Progress } from '@components/progress';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Progress"
        description="작업의 진행 상태를 시각적으로 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 프로그레스 바 예시입니다.
        </p>
        <Container className="flex-col items-stretch">
          <Progress value={33} />
        </Container>
        <CodeBlock
          code={`<Progress value={33} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Different Values</h2>
        <p className="text-muted-foreground">
          다양한 진행률을 표시할 수 있습니다.
        </p>
        <Container className="flex-col items-stretch">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0%</span>
            </div>
            <Progress value={0} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </Container>
        <CodeBlock
          code={`<Progress value={0} />
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Progress } from '@gpters-internal/ui';

function Example() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return <Progress value={progress} />;
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
