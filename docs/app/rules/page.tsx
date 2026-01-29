import fs from 'fs';
import path from 'path';

export default function RulesPage() {
  // 빌드 시점에 파일 읽기 (루트의 .claude/skills에서 직접 참조)
  const filePath = path.join(process.cwd(), '../.claude/skills/design-rules.md');
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    content = '# Design Rules\n\n규칙 파일을 찾을 수 없습니다. 빌드를 다시 실행해주세요.';
  }

  // 간단한 마크다운 파싱
  const sections = parseMarkdown(content);

  return (
    <div className="rules-page">
      <article className="markdown-content">
        {sections.map((section, i) => (
          <RenderSection key={i} section={section} />
        ))}
      </article>
    </div>
  );
}

interface Section {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'code' | 'ul' | 'table' | 'blockquote' | 'hr';
  content: string;
  language?: string;
  items?: string[];
  rows?: string[][];
}

function parseMarkdown(content: string): Section[] {
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

function RenderSection({ section }: { section: Section }) {
  switch (section.type) {
    case 'h1':
      return <h1>{section.content}</h1>;
    case 'h2':
      return <h2>{section.content}</h2>;
    case 'h3':
      return <h3>{section.content}</h3>;
    case 'p':
      return <p dangerouslySetInnerHTML={{ __html: formatInlineCode(section.content) }} />;
    case 'blockquote':
      return <blockquote dangerouslySetInnerHTML={{ __html: formatInlineCode(section.content) }} />;
    case 'hr':
      return <hr />;
    case 'code':
      return (
        <pre className="rules-code-block">
          <code>{section.content}</code>
        </pre>
      );
    case 'ul':
      return (
        <ul>
          {section.items?.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineCode(item) }} />
          ))}
        </ul>
      );
    case 'table':
      if (!section.rows || section.rows.length === 0) return null;
      const [header, ...body] = section.rows;
      return (
        <table>
          <thead>
            <tr>
              {header.map((cell, i) => (
                <th key={i} dangerouslySetInnerHTML={{ __html: formatInlineCode(cell) }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} dangerouslySetInnerHTML={{ __html: formatInlineCode(cell) }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

function formatInlineCode(text: string): string {
  // 인라인 코드 변환: `code` → <code>code</code>
  return text.replace(/`([^`]+)`/g, '<code>$1</code>');
}
