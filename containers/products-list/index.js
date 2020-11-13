import { useQuery } from '@apollo/client'
import Link from 'next/link'

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
        <li key={product.id}>
          <Link href={`/products/${encodeURIComponent(product.slug)}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductsList
