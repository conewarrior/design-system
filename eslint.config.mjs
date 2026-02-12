import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['app/**/page.tsx'],
    rules: {
      // 페이지 파일에서 로컬 컴포넌트 정의 금지 (Page 컴포넌트 제외)
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration[id.name=/^[A-Z]/]:not(ExportDefaultDeclaration > FunctionDeclaration):not([id.name=/Page$/])',
          message: '❌ 페이지 파일에서 컴포넌트를 직접 정의하지 마세요. @components/ 또는 ../ui/에서 import하세요.',
        },
        {
          selector: 'VariableDeclarator[id.name=/^[A-Z]/][init.type="ArrowFunctionExpression"]:not([id.name=/Page$/])',
          message: '❌ 페이지 파일에서 컴포넌트를 직접 정의하지 마세요. @components/ 또는 ../ui/에서 import하세요.',
        },
      ],
    },
  },
);
