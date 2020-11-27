import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import AddressStep from '../containers/checkout/address-step'

const GET_ORDER_QUERY = gql`
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

function CheckoutPage() {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ORDER_QUERY)

  if (error) {
    return <div>Error loading order.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { lineItems } = data?.currentOrder

  if (lineItems?.nodes.length === 0) {
    router.push('/')
    return null
  }

  return (
    <main>
      <h1>Checkout</h1>
      <ul>
        {lineItems.nodes.map((lineItem) => (
          <li key={lineItem.id}>
            {lineItem.variant.sku} - Quantity: {lineItem.quantity}
          </li>
        ))}
      </ul>
      <AddressStep />
    </main>
  )
}

export default CheckoutPage
