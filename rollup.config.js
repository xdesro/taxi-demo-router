import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "js/index.js",
  output: {
    dir: "dist/js",
    format: "es",
    sourcemap: true
  },
  plugins: [nodeResolve()],
};
