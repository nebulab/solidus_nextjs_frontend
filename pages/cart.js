const CartPage = () => {
  const { loading, error = true, data } = {}
  const [removeFromCart] = []
  const [updateCartQuantity] = []

  if (error) {
    return <div>Error loading menu.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { lineItems } = data.currentOrder

  const hasLineItems = () => lineItems.nodes.length > 0
  const emptyCart = () => <div>Your cart is empty</div>

  const removeLineItem = (lineItemId) => {
    removeFromCart({ variables: { lineItemId: lineItemId } })
  }

  const updateLineItemQuantity = (lineItemId, quantity) => {
    updateCartQuantity({
      variables: { lineItemId: lineItemId, quantity: quantity }
    })
  }

  const lineItemsList = () => (
    <ul>
      {lineItems.nodes.map((lineItem) => (
        <li key={lineItem.id}>
          <div className="sku">
            <label>SKU: </label>
            <span>{lineItem.variant.sku}</span>
          </div>
          <div className="quantity">
            <label>Quantity: </label>
            <button
              onClick={() =>
                updateLineItemQuantity(lineItem.id, lineItem.quantity - 1)
              }
            >
              -
            </button>
            <span>{lineItem.quantity}</span>
            <button
              onClick={() =>
                updateLineItemQuantity(lineItem.id, lineItem.quantity + 1)
              }
            >
              +
            </button>
          </div>
          <div className="remove">
            <label>Remove: </label>
            <button onClick={() => removeLineItem(lineItem.id)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <main>
      <p>Shopping Cart</p>
      {hasLineItems() ? lineItemsList() : emptyCart()}
    </main>
  )
}

export default CartPage
