import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/scripts/admin',
    output: [{ file: 'dist/admin.js', format: 'iife', sourcemap: true }],
    plugins: [commonjs(), nodeResolve()],
  },
];
