import { gql, useQuery } from '@apollo/client'

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      nodes {
        id
        name
        masterVariant {
          images {
            nodes {
              largeUrl
            }
          }
        }
      }
    }
  }
`

export default function ProductsList() {
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
          {product.name}
        </li>
      ))}
    </ul>
  )
}
