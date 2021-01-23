import vue from 'rollup-plugin-vue';
import common from 'rollup-plugin-commonjs';

import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
  // 核心选项
  input: "./src/index.js", // 
  // plugins,
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: "Sn"
  },
  external: ['vue'],
  plugins: [
    common(),
    vue({
      css: false
    }),
    css({ output: 'bundle.css' }),
    resolve()
  ]
};