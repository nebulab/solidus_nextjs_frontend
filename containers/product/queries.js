import { gql } from '@apollo/client'

export const GET_PRODUCT_QUERY = gql`
  query GetProduct($slug: String!) {
    productBySlug(slug: $slug) {
      id
      slug
      name
    }
  }
`
