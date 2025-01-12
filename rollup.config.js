const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

const banner = [
  "/**",
  " * Copyright (c) 2016-2020, Peculiar Ventures, All rights reserved.",
  " */",
  "",
].join("\n");
const input = "src/index.ts";
const external = Object.keys(pkg.dependencies).concat(["events"]);

module.exports = {
  input,
  plugins: [
    // @ts-ignore
    typescript({
      check: true,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
          removeComments: true,
        }
      }
    }),
  ],
  external,
  output: [
    {
      banner,
      file: pkg.main,
      format: "cjs",
    },
    {
      banner,
      file: pkg.module,
      format: "es",
    },
  ],
};
