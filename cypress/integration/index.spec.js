describe('Index page', () => {
  beforeEach(() => {
    cy.stubRequest('productList.json', 'GET_PRODUCTS_QUERY')
    cy.visit('/')
  })

  it('shows the list of products', () => {
    const products = [
      'Solidus T-Shirt',
      'Solidus Long Sleeve'
    ]

    cy.get('li').each((item, index) => {
      cy.wrap(item).should('have.text', products[index])
    })
  })
})
