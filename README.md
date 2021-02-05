# Solidus NextJS Storefront

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Development

### Starting the server

```
  npm run dev
```

### Running unit tests

Solidus NextJS Frontend uses Jest to run unit tests with the help
of React testing library to render the components.

You can run unit tests locally using:

```
npm run test:ci
```

### Running the linter

Solidus NextJS Frontend uses ESLint with the JavaScript Standard style guide and Prettier as formatter.

Use `npm run lint` to run the eslint linter

Use `npm run lint:fix` to run the eslint linter with the autofix option

Use `npm run lint:format` to run the prettier formatter on all files.

**Important:**

- Install the prettier extension for your editor [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Install the eslint extension for your editor [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

You can also configure your editor to format the current file on save avoiding a lot of errors.
These are the steps to configure the linter on VS Code:

- Create this file: `.vscode/settings.json`
- Fill the file with:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Creating a component

- Each component must be added under the `components` directory
- Create the directory with the name of the component (e.g. button)
- The `index.js` file contains the component
- The `queries.js` file export all the components `queries`
- The `mutations.js` file export all the components `mutations`
- Follow the style of the `Button` component and the `ProductsList` one
- Each component should have `propTypes` and `defaultProps` when applicable
