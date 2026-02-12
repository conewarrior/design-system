import fs from 'fs';
import path from 'path';
import { parseMarkdown, RenderSection } from '../../ui/MarkdownRenderer';

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
    <div className="space-y-4">
      <article>
        {sections.map((section, i) => (
          <RenderSection key={i} section={section} />
        ))}
      </article>
    </div>
  );
}
