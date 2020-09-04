import { gql } from '@apollo/client'

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