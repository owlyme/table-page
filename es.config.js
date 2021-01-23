import vue from 'rollup-plugin-vue';
import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';
export default {
  // 核心选项
  input: "./src/index.js", // 
  // plugins,
  output: {
    file: 'dist/bundle.es.js',
    format: 'es',
    name: "snTable",
  },
  external: ['vue'],
  plugins: [
    common(),
    vue({
      css: true
    }),

    resolve(),
    terser()
  ]
};