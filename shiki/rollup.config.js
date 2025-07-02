import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "shiki.bundle.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: false,
    inlineDynamicImports: false,
    entryFileNames: "_ch-[name].js",
    chunkFileNames: "_ch-[name]-[hash].js"
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    esbuild({
      minify: true,
      target: "es2020",
    }),
  ],
};
