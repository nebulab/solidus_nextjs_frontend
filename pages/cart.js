import { gql, useQuery, useMutation } from '@apollo/client'

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

  const REMOVE_FROM_CART_MUTATION = gql`
    mutation removeFromCart($lineItemId: ID!) {
      removeFromCart(input: { lineItemId: $lineItemId }) {
        order {
          number
          state
          lineItems {
            nodes {
              id
            }
          }
        }
        errors {
          path
          message
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CART_LINE_ITEMS_QUERY)

  const [removeFromCart] = useMutation(REMOVE_FROM_CART_MUTATION, {
    refetchQueries: [{ query: GET_CART_LINE_ITEMS_QUERY }]
  })

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

  const lineItemsList = () => (
    <ul>
      {lineItems.nodes.map((lineItem) => (
        <li key={lineItem.id}>
          <div className="sku">
            <label>SKU: </label>
            <span>{lineItem.variant.sku}</span>
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
