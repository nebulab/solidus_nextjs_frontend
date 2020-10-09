import { useQuery, useMutation } from '@apollo/client'

import { GET_PRODUCT_QUERY, ADD_TO_CART } from './queries'

export default function Product ({ slug }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_QUERY, {
    variables: { slug }
  })
  const [addToCart] = useMutation(ADD_TO_CART);

  if (error) {
    return <div>Error loading product.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { productBySlug } = data

  return (
    <div>
      <h1>{productBySlug.name}</h1>
      <button onClick={() => {
        addToCart({ variables: { variantId: productBySlug.masterVariant.id, quantity: 1 } });
      }}>Add to cart</button>
    </div>
  )
}
