# Design System with Sass

This repository houses a comprehensive design system implemented with Sass, following the principles of Atomic design. With this design system, you can easily create consistent and modular UI components for your projects.

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/design-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd design-system
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Usage

This design system follows the [Atomic design principles] (https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology), meaning it's structured in a hierarchy of `atoms`, `molecules`, `organisms`, `templates` and `pages` . You can find these components within their respective directories in the `src` folder.

### Generating Sass Docs

To auto-generate Sass documentation, use the following command:

```bash
npm run doc:create
```

This will generate documentation based on the comments in your Sass files and make it accessible in the docs directory.

## Compiling Sass to CSS

You can compile the Sass code into CSS using one of the two commands provided:

**Using Gulp:**
To compile Sass using Gulp, run the following command:

```bash
npm run gulp
```

This command utilizes [Gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass) to compile the Sass code into CSS. The configuration for this compilation process is defined in the `gulpfile.js`.

**Using Node-sass:**
Alternatively, you can compile Sass to CSS using [node-sass](https://www.npmjs.com/package/node-sass). Run the following command:

```bash
npm run build
```

This command uses the node-sass library and its configurations defined in the directory `structure/scripts`. It offers an alternative approach to compiling Sass into CSS. Choose the method that best fits your project requirements and workflow preferences.

## Overriding Default Variables

This design system allows users to override default variables to customize various aspects of the design. You can find these variables in the `src/styles/settings` directory. Feel free to modify these variables according to your project requirements.

## Contributing

We welcome contributions to improve and expand this design system. If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
