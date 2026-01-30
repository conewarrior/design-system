#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../..');
const indexPath = path.join(rootDir, 'index.ts');
const docsAppDir = path.join(__dirname, '../app/components');

function extractComponentNames() {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const exportLines = indexContent.match(/export \* from '\.\/components\/[^']+'/g) || [];
  
  return exportLines.map(line => {
    const match = line.match(/export \* from '\.\/components\/([^']+)'/);
    return match ? match[1] : null;
  }).filter(Boolean);
}

function capitalizeWords(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function generateComponentPage(componentName) {
  const displayName = capitalizeWords(componentName);
  const pascalName = toPascalCase(componentName);
  
  const template = `export default function ${pascalName}Page() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">${displayName}</h1>
        <p className="text-lg text-muted-foreground">
          ${displayName} component from the design system.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{\`npm install @design-geniefy/ui\`}</code></pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{\`import { ${pascalName} } from '@design-geniefy/ui';\`}</code></pre>
        <p className="text-sm text-muted-foreground mt-2">
          See the component source for available props and variants.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example</h2>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Component examples and interactive demos will be added here.
          </p>
        </div>
      </section>
    </div>
  );
}
`;

  return template;
}

function main() {
  console.log('🔍 Extracting component names from index.ts...\n');
  
  const componentNames = extractComponentNames();
  console.log(`Found ${componentNames.length} components\n`);
  
  let created = 0;
  let skipped = 0;
  
  componentNames.forEach(name => {
    const componentDir = path.join(docsAppDir, name);
    const pagePath = path.join(componentDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      console.log(`⏭️  Skipped: ${name} (already exists)`);
      skipped++;
      return;
    }
    
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }
    
    const content = generateComponentPage(name);
    fs.writeFileSync(pagePath, content, 'utf8');
    
    console.log(`✅ Created: ${name}`);
    created++;
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Created: ${created}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${componentNames.length}`);
  console.log(`\n✨ Component documentation generated!`);
}

main();
