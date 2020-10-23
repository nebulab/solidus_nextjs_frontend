describe('Product page', () => {
  beforeEach(() => {
    cy.stubRequest({
      GetProduct: 'product.json'
    })

    cy.visit('/products/solidus-t-shirt')
  })

  it('shows the product name', () => {
    cy.get('h1').should('have.text', 'Solidus T-Shirt')
  })
})
