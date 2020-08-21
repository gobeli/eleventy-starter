import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default [
  {
    input: 'src/scripts/admin',
    output: [
      {
        file: 'dist/admin.js',
        format: 'iife',
        sourcemap: true,
        globals: {
          'markdown-it': 'markdownit',
        },
      },
    ],
    external: ['markdown-it'],
    plugins: [builtins(), babel(), json(), commonjs()],
  },
  {
    input: 'src/scripts/app',
    output: [
      {
        file: 'dist/app.js',
        format: 'iife',
        sourcemap: true
      }
    ],
    plugins: [babel()],
  }
];
