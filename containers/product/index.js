import { useQuery } from '@apollo/client'

import { GET_PRODUCT_QUERY } from './queries'

export default function Product ({ slug }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_QUERY, {
    variables: { slug }
  })

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
    </div>
  )
}
