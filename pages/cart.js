import { gql, useQuery } from '@apollo/client'

const CartPage = () => {
  const GET_CART_LINE_ITEMS_QUERY = gql`
    query GetCurrentOrder {
      currentOrder {
        id
        number
        lineItems {
          nodes {
            id
            variant {
              sku
            }
            quantity
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CART_LINE_ITEMS_QUERY)

  if (error) {
    return <div>Error loading menu.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { lineItems } = data.currentOrder

  const hasLineItems = () => lineItems.nodes.length > 0
  const emptyCart = () => <div>Your cart is empty</div>
  const lineItemsList = () => (
    <ul>
      {lineItems.nodes.map((lineItem) => (
        <li key={lineItem.id}>
          {lineItem.variant.sku} - Quantity: {lineItem.quantity}
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
