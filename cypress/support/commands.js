// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const responseStub = (result) => Promise.resolve({
  json: () => Promise.resolve(result),
  text: () => Promise.resolve(JSON.stringify(result)),
  ok: true
})

Cypress.Commands.add('stubRequest', (fixture, operationName) => {
  cy.fixture(fixture).then((data) => {
    cy.on('window:before:load', (win) => {
      const fetchGraphQl = () => {
        return responseStub(data[operationName])
      }

      cy.stub(win, 'fetch')
        .withArgs(Cypress.env('NEXT_PUBLIC_GRAPHQL_URI'))
        .as('fetchGraphQl')
        .callsFake(fetchGraphQl)
    })
  })
})
