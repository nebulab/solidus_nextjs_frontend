import { useEffect, useState } from 'react'

import { getOrder, removeFromCart } from 'api'

const CartPage = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cart, setCart] = useState(null)

  useEffect(() => {
    getOrder()
      .then((order) => {
        setCart(order)
        setLoading(false)
      })
      .catch(() => {
        setError('The cart is empty.')
        setLoading(false)
      })
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <main>
      <p>Shopping Cart</p>
      {cart.line_items.length > 0 ? (
        <ul>
          {cart.line_items.map((lineItem) => (
            <li key={lineItem.id}>
              <p>SKU: {lineItem.variant.sku}</p>
              <button onClick={() => removeFromCart(lineItem.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Your cart is empty</div>
      )}
    </main>
  )
}

export default CartPage
