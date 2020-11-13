// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('stubRequest', (fixtures) => {
  cy.route2('POST', Cypress.env('NEXT_PUBLIC_GRAPHQL_URI'), (req) => {
    const operationName = JSON.parse(req.body).operationName
    if (operationName in fixtures) {
      req.reply((res) => res.send({ fixture: fixtures[operationName] }))
    }
  })
})
