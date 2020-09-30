import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace';

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
    external: ['markdown-it', 'liquidjs'],
    plugins: [resolve(), babel(), replace({ 'process.env.NODE_ENV': process.env.NODE_ENV }), commonjs()],
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
