import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import config from '../../eslint.config.mjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...config,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: [
            'tsconfig.json',
          ],
          alwaysTryTypes: true,
        }),
      ],
      react: {
        version: 'detect',
      },
    },
  },
]);

export default eslintConfig;
