/// <reference types="cypress" />
// ***********************************************************
//
// You can read more here:
// https://on.cypress.io/plugins-guide
//
// ***********************************************************

const dotenvPlugin = require('cypress-dotenv')

module.exports = (on, config) => {
  config = dotenvPlugin(
    config,
    {
      path: '.env.test'
    },
    true
  )
  return config
}
