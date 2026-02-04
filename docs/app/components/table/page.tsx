import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@components/table';
import { CodeBlock } from '../../../ui/CodeBlock';

const invoices = [
  { invoice: 'INV001', status: '완료', method: '신용카드', amount: '250,000' },
  { invoice: 'INV002', status: '대기', method: '계좌이체', amount: '150,000' },
  { invoice: 'INV003', status: '완료', method: '신용카드', amount: '350,000' },
  { invoice: 'INV004', status: '취소', method: '계좌이체', amount: '450,000' },
];

export default function TablePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Table"
        description="데이터를 행과 열로 구성하여 표시하는 테이블"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          구조화된 데이터를 표시하는 기본 테이블입니다.
        </p>
        <Container>
          <Table>
            <TableCaption>최근 청구 내역</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>결제 방법</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}원</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>합계</TableCell>
                <TableCell className="text-right">1,200,000원</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Container>
        <CodeBlock
          code={`<Table>
  <TableCaption>최근 청구 내역</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>상태</TableHead>
      <TableHead>결제 방법</TableHead>
      <TableHead className="text-right">금액</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}원</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>합계</TableCell>
      <TableCell className="text-right">1,200,000원</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Simple Table</h2>
        <p className="text-muted-foreground">
          간단한 데이터를 표시하는 테이블입니다.
        </p>
        <Container>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>역할</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@example.com</TableCell>
                <TableCell>관리자</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>김철수</TableCell>
                <TableCell>kim@example.com</TableCell>
                <TableCell>편집자</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>이영희</TableCell>
                <TableCell>lee@example.com</TableCell>
                <TableCell>뷰어</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
        <CodeBlock
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>이름</TableHead>
      <TableHead>이메일</TableHead>
      <TableHead>역할</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>홍길동</TableCell>
      <TableCell>hong@example.com</TableCell>
      <TableCell>관리자</TableCell>
    </TableRow>
    {/* ... */}
  </TableBody>
</Table>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@design-geniefy/ui';

function DataTable() {
  return (
    <Table>
      <TableCaption>데이터 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>컬럼1</TableHead>
          <TableHead>컬럼2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>데이터1</TableCell>
          <TableCell>데이터2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
