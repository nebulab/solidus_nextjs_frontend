import { gql } from '@apollo/client'

export const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      order {
        number
        guestToken
      }
    }
  }
`
