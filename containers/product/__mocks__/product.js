import { GET_PRODUCT_QUERY } from '../queries'

export const product = slug => [
  {
    request: {
      query: GET_PRODUCT_QUERY,
      variables: { slug }
    },
    result: {
      data: {
        productBySlug: {
          id: 'U3ByZWU6OlByb2R1Y3QtMQ==',
          name: 'Solidus T-Shirt',
          slug
        }
      }
    }
  }
]
