describe('Cart page', () => {
  beforeEach(() => {
    cy.stubRequest({
      GetCurrentOrder: 'currentOrderLineItemList.json'
    })

    cy.visit('/cart')
  })

  it('shows the list of current order line items', () => {
    const lineItemsData = {
      0: {
        id: 'U3ByZWU6OkxpbmVJdGVtLTcw',
        sku: 'SOL-00003',
        quantity: 1
      },
      1: {
        id: 'U3ByZWU6OkxpbmVJdGVtLTcx',
        sku: 'SOL-00004',
        quantity: 2
      }
    }

    cy.get('main > ul > li > .sku').each((item, index) => {
      cy.wrap(item).should('have.text', `SKU: ${lineItemsData[index].sku}`)
    })
  })
})
