import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/main.js",
    output: {
      file: "public/bundle.js",
      format: "iife", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true
    },
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      production && terser() // minify, but only in production
    ]
  },
  {
    input: "src/MagicScroll.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
      { name: "MagicScroll", file: pkg.browser, format: "umd" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      // resolve(), // tells Rollup how to find date-fns in node_modules
      // commonjs(), // converts date-fns to ES modules
      production && terser() // minify, but only in production
    ]
  }
];
