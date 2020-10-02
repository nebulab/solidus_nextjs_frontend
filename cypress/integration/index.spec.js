describe('Index page', () => {
  beforeEach(() => {
    cy.stubRequest({
      GetTaxonomies: 'taxonomiesList.json',
      GetProducts: 'productList.json'
    })

    cy.visit('/')
  })

  it('shows the list of products', () => {
    const taxonomies = [
      'All',
      'Clothing',
      'Caps',
      'Bags',
      'Mugs'
    ]

    const products = [
      'Solidus T-Shirt',
      'Solidus Long Sleeve'
    ]

    cy.get('main > nav > ul > li').each((item, index) => {
      cy.wrap(item).should('have.text', taxonomies[index])
    })

    cy.get('main > ul > li').each((item, index) => {
      cy.wrap(item).should('have.text', products[index])
    })
  })
})
