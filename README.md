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

Solidus NextJS Frontent uses StandardJS library as style guide, linter and formatter.
It works as a standlone system and doens't need an `.eslintrc` file.

```
  npm run lint
  npm run lint --fix # Automatically fixes all the offences
```

**Important:** install the standardjs extension for you editor [here](https://standardjs.com/#are-there-text-editor-plugins)

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
