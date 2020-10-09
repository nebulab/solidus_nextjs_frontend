import { gql } from '@apollo/client'

export const GET_PRODUCT_QUERY = gql`
  query GetProduct($slug: String!) {
    productBySlug(slug: $slug) {
      id
      slug
      name
      variants {
        nodes {
          id
          sku
        }
      }
      masterVariant {
        id
      }
    }
  }
`

export const ADD_TO_CART = gql`
  mutation addToCart($variantId: ID!, $quantity: Int!) {
    addToCart(input: { variantId: $variantId, quantity: $quantity }) {
      order {
        id
        lineItems {
          nodes {
            variant {
              sku
            }
            quantity
          }
        }
      }
    }
  }
`
