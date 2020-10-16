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
npm run test:unit
```

### Running the E2E test

Solidus NextJS Frontend uses Cypress to run E2E test.
Cypress is usually run locally using the development server. However, in this case, we use the `start server and run` library to run a dedicated `test` server for Cypress.

This is needed to disable Apollo's client cache and allows us to stub GraphQL requests.
stub the GraphQL requests.

Use `npm run test:feature` to run E2E tests with the Cypress GUI or simply use `npm run test:feature:ci` to run them headless.

### Running the linter

Solidus NextJS Frontent uses prettier-standard library as style guide, linter and formatter.
It works as a standlone system and doens't need an `.eslintrc` file.

```
  npm run format
  npm run lint
```

**Important:** install the prettier-standard extension for you editor [here](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)

You can also configure your editor to format the current file on save avoiding the linter errors.

These are the steps to configure the linter on VS Code:

- Create this file: .vscode/settings.json
- Fill the file with:

```
{
  "editor.defaultFormatter": "numso.prettier-standard-vscode",
  "editor.formatOnSave": true
}
```

### Running Storybook

You can check the application components locally running the Storybook server with this command:

```
  npm run storybook
```

and visiting the http://localhost:6006 page.

![storybook](https://user-images.githubusercontent.com/9986708/90254316-d3bfed80-de42-11ea-9162-8608e5e2a099.png)

### Creating a component

- Each component must be added under the `components` directory
- Create the directory with the name of the component (e.g. button)
- The `index.js` file contains the component
- The `index.stories.js` file containes the component definition for Storybook
- The `__mock__` directory contains the Apollo queries and mutations mock used in Storybook and tests
- The `queries.js` file export all the components `queries`
- The `mutations.js` file export all the components `mutations`
- Follow the style of the `Button` component and the `ProductsList` one
- Each component should have `propTypes` and `defaultProps` when applicable
