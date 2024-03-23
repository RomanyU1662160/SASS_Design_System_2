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
    outputStyle: "compressed", // compressed, expanded, nested, compact
    includePaths: [path.resolve("src")], // This is needed to resolve the @import statements in the scss files to the correct path ./src
    sourceMap: true, // This is needed to generate the source map
  });
  // Write the result to the css file
  return fs.writeFileSync(path.resolve(target), result.css.toString());
};

const getallComponents = () => {
  const allComponents = [];
  const directories = ["molecules", "organisms", "atoms"]; // folders to look for components

  directories.map((folder) => {
    const files = fs.readdirSync(`src/${folder}`); // read the directory and return an array of file names in the directory eg. ['button.scss', 'input.scss']

    // return object with source and target to use it in the compileComponents function
    const components = files.map((fileName) => {
      const source = path.resolve(`src/${folder}/${fileName}`);
      const updatedExtension = fileName.replace(".scss", ".css");
      const target = path.resolve(`src/lib/components/${updatedExtension}`);

      return allComponents.push({
        source,
        target,
      });
    });
  });

  return allComponents;
};

const compileComponents = (components) => {
  components.map((component) => {
    compile(component.source, component.target);
  });
};

const allComponents = getallComponents();
compile(sassSource, cssTarget);
compileComponents(allComponents);
