const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '../../.claude/skills/design-rules.md');
const DEST_DIR = path.join(__dirname, '../content');
const DEST = path.join(DEST_DIR, 'design-rules.md');

// content 폴더 생성
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// 파일 복사
if (fs.existsSync(SOURCE)) {
  fs.copyFileSync(SOURCE, DEST);
  console.log('✅ design-rules.md copied to docs/content/');
} else {
  console.warn('⚠️ design-rules.md not found at', SOURCE);
}
