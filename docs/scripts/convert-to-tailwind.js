#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// CSS class to Tailwind mappings
const classMap = {
  'page-title': 'text-4xl font-bold tracking-tight mb-2',
  'section-title': 'text-2xl font-semibold',
  'subsection-title': 'text-lg font-medium',
  'section-desc': 'text-muted-foreground',
  'page-description': 'text-lg text-muted-foreground',
  
  // Containers
  'naming-intro': 'space-y-4',
  'color-section': 'space-y-8',
  'color-row': 'flex items-center gap-4',
  'color-label': 'text-sm font-medium w-20 text-muted-foreground',
  'color-swatches': 'flex gap-1 flex-1',
  
  // Tables
  'semantic-token-table': 'overflow-x-auto',
  
  // Status cards
  'status-color-grid': 'grid gap-6 sm:grid-cols-2',
  'status-color-card': 'rounded-lg border overflow-hidden',
  'status-color-header': 'p-4 text-white font-semibold',
  'status-color-body': 'p-4 space-y-2',
  'status-token-row': 'flex justify-between text-sm',
  'status-tokens': 'space-y-1',
  
  // Code blocks
  'code-block': 'bg-muted rounded-md p-4 overflow-x-auto',
  
  // Usage guidelines
  'usage-guidelines': 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  'guideline-item': 'space-y-2',
  
  // Changelog/Updates specific
  'changelog-item': 'rounded-lg border bg-card p-4 space-y-2',
  'changelog-icon': 'text-2xl',
  'changelog-content': 'flex-1',
  'changelog-title': 'font-semibold',
  'changelog-meta': 'text-sm text-muted-foreground flex gap-2',
  'changelog-file': 'bg-muted px-2 py-1 rounded text-xs font-mono',
  'changelog-group': 'space-y-4',
  'changelog-date': 'text-lg font-semibold text-muted-foreground',
  'changelog-items': 'space-y-3',
  'changelog-page': 'space-y-12',
  
  // Features/Cards
  'features-grid': 'grid gap-6 sm:grid-cols-2',
  'feature-card': 'rounded-lg border bg-card p-6 space-y-2',
  'feature-title': 'text-lg font-semibold',
  'feature-description': 'text-sm text-muted-foreground',
  'feature-icon': 'text-4xl',
  
  // Guide/Steps
  'guide': 'space-y-8',
  'step': 'space-y-3',
  'step-number': 'inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold',
  'step-title': 'text-xl font-semibold',
  'step-content': 'space-y-2',
  
  // Tags
  'tag warning': 'inline-block px-2 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium',
  'tag': 'inline-block px-2 py-1 rounded-full bg-muted text-xs font-medium',
};

// Files to convert
const files = [
  'app/tokens/colors/page.tsx',
  'app/tokens/typography/page.tsx',
  'app/tokens/spacing/page.tsx',
  'app/tokens/radius/page.tsx',
  'app/tokens/border/page.tsx',
  'app/tokens/effects/page.tsx',
  'app/install/page.tsx',
  'app/install/how-it-works/page.tsx',
  'app/rules/page.tsx',
  'app/rules/philosophy/page.tsx',
  'app/rules/changelog/page.tsx',
  'app/status/page.tsx',
  'app/status/changes/page.tsx',
  'app/status/changes/components/page.tsx',
  'app/status/changes/tokens/page.tsx',
  'app/status/adoption/page.tsx',
  'app/status/adoption/projects/page.tsx',
  'app/status/adoption/pending/page.tsx',
  'app/status/roadmap/page.tsx',
  'app/changelog/page.tsx',
  'app/updates/page.tsx',
];

function convertFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  
  // Replace className values
  for (const [oldClass, newClass] of Object.entries(classMap)) {
    const regex = new RegExp(`className="${oldClass}"`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `className="${newClass}"`);
      modified = true;
    }
  }
  
  // Handle template literal classNames (e.g., color-swatch with conditionals)
  content = content.replace(/className=\{`color-swatch \$\{/g, 'className={`w-12 h-12 rounded flex items-center justify-center text-xs font-medium ${');
  content = content.replace(/light-text/g, 'text-white');
  content = content.replace(/dark-text/g, 'text-gray-900');
  
  // Add table styling
  content = content.replace(/<table>/g, '<table className="w-full border-collapse">');
  content = content.replace(/<th>/g, '<th className="text-left p-2 border-b font-medium text-sm">');
  content = content.replace(/<td>/g, '<td className="p-2 border-b text-sm">');
  
  // Add section spacing (only if no className already)
  content = content.replace(/<section>/g, '<section className="space-y-6">');
  
  // Wrap main return div in space-y-12 (only for page components)
  if (content.includes('export default')) {
    // Find the main return statement and wrap first div
    content = content.replace(
      /(export default (?:async )?function \w+\([^)]*\) \{[\s\S]*?return \(\s*)<div>/,
      '$1<div className="space-y-12">'
    );
  }
  
  if (modified || content !== fs.readFileSync(fullPath, 'utf8')) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Converted: ${filePath}`);
  } else {
    console.log(`⏭️  No changes: ${filePath}`);
  }
}

console.log('🔄 Converting CSS classes to Tailwind utilities...\n');

files.forEach(convertFile);

console.log('\n✨ Conversion complete!');
