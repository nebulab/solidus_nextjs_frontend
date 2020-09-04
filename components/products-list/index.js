import { useQuery } from '@apollo/client'

import { GET_PRODUCTS_QUERY } from './queries'

const ProductsList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)

  if (error) {
    return <div>Error loading posts.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { products } = data

  return (
    <ul>
      {products.nodes.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

export default ProductsList
