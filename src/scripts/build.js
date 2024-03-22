/*
This script is using the node-sass package to compile the global.scss file into a global.css file.
https://www.npmjs.com/package/node-sass
*/
const sass = require("node-sass");
const path = require("path");
const fs = require("fs");

const sassSource = "src/global.scss";
const cssTarget = "src/lib/global.css";

// Compile the scss file into css
const compile = (source, target) => {
  const result = sass.renderSync({
    file: path.resolve(source), // path to the scss file
    outFile: path.resolve(target), // path to the css file
    outputStyle: "expanded", // compressed, expanded, nested, compact
    includePaths: [path.resolve("src")], // This is needed to resolve the @import statements in the scss files
    sourceMap: true, // This is needed to generate the source map
  });
  // Write the result to the css file
  return fs.writeFileSync(path.resolve(target), result.css.toString());
};

compile(sassSource, cssTarget);
