import { gql, useQuery } from '@apollo/client'

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts($after: String) {
    products(first: 2, after: $after) {
      edges{
        node {
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
      pageInfo {
        endCursor
      }
    }
  }
`

export default function ProductsList() {
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS_QUERY);

  if (error) {
    return <div>Error loading posts.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { products } = data;

  return (
    <>
      <ul>
        {products.edges.map(({ node }) => (
          <li key={node.id}>
            {node.name}
          </li>
        ))}
      </ul>

      <button onClick={() => {
        fetchMore({
          variables: { after: products.pageInfo.endCursor }
        })
      }}>More</button>
    </>
  )
}
