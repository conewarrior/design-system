import { Separator } from '@components/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';

interface Section {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'code' | 'ul' | 'table' | 'blockquote' | 'hr';
  content: string;
  language?: string;
  items?: string[];
  rows?: string[][];
}

function formatInlineCode(text: string): string {
  return text.replace(/`([^`]+)`/g, '<code class="text-xs bg-muted px-1 py-0.5 rounded font-mono">$1</code>');
}

export function parseMarkdown(content: string): Section[] {
  const lines = content.split('\n');
  const sections: Section[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 코드 블록
    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'text';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      sections.push({ type: 'code', content: codeLines.join('\n'), language });
      i++;
      continue;
    }

    // 테이블
    if (line.startsWith('|') && line.endsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        const row = lines[i]
          .split('|')
          .slice(1, -1)
          .map(cell => cell.trim());
        // separator 행 스킵
        if (!row[0]?.startsWith('-')) {
          rows.push(row);
        }
        i++;
      }
      if (rows.length > 0) {
        sections.push({ type: 'table', content: '', rows });
      }
      continue;
    }

    // 수평선
    if (line.match(/^---+$/)) {
      sections.push({ type: 'hr', content: '' });
      i++;
      continue;
    }

    // 헤딩
    if (line.startsWith('# ')) {
      sections.push({ type: 'h1', content: line.slice(2) });
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      sections.push({ type: 'h2', content: line.slice(3) });
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      sections.push({ type: 'h3', content: line.slice(4) });
      i++;
      continue;
    }

    // 인용문
    if (line.startsWith('> ')) {
      sections.push({ type: 'blockquote', content: line.slice(2) });
      i++;
      continue;
    }

    // 리스트
    if (line.match(/^[-*] /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        items.push(lines[i].slice(2));
        i++;
      }
      sections.push({ type: 'ul', content: '', items });
      continue;
    }

    // 일반 텍스트
    if (line.trim()) {
      sections.push({ type: 'p', content: line });
    }
    i++;
  }

  return sections;
}

export function RenderSection({ section }: { section: Section }) {
  switch (section.type) {
    case 'h1':
      return <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{section.content}</h1>;
    case 'h2':
      return <h2 className="text-xl font-semibold mt-6 mb-3 border-b pb-2">{section.content}</h2>;
    case 'h3':
      return <h3 className="text-lg font-medium mt-4 mb-2">{section.content}</h3>;
    case 'p':
      return <p className="text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: formatInlineCode(section.content) }} />;
    case 'blockquote':
      return <blockquote className="border-l-2 border-primary pl-4 my-4 text-muted-foreground italic" dangerouslySetInnerHTML={{ __html: formatInlineCode(section.content) }} />;
    case 'hr':
      return <Separator className="my-6" />;
    case 'code':
      return (
        <pre className="rounded-md bg-muted p-4 overflow-x-auto my-4">
          <code className="text-xs font-mono">{section.content}</code>
        </pre>
      );
    case 'ul':
      return (
        <ul className="list-disc list-inside space-y-1 text-sm mb-3">
          {section.items?.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineCode(item) }} />
          ))}
        </ul>
      );
    case 'table':
      if (!section.rows || section.rows.length === 0) return null;
      const [header, ...body] = section.rows;
      return (
        <div className="overflow-x-auto my-4 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {header.map((cell, i) => (
                  <TableHead key={i} dangerouslySetInnerHTML={{ __html: formatInlineCode(cell) }} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {body.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => (
                    <TableCell key={j} dangerouslySetInnerHTML={{ __html: formatInlineCode(cell) }} />
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    default:
      return null;
  }
}

export type { Section };
