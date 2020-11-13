describe('Cart page', () => {
  beforeEach(() => {
    cy.stubRequest({
      GetCurrentOrder: 'currentOrderLineItemList.json'
    })

    cy.visit('/cart')
  })

  it('shows the list of current order line items', () => {
    const lineItemsData = ['SOL-00003 - Quantity: 1', 'SOL-00004 - Quantity: 2']

    cy.get('main > ul > li').each((item, index) => {
      cy.wrap(item).should('have.text', lineItemsData[index])
    })
  })
})
