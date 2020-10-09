import { GET_PRODUCT_QUERY } from '../queries'

const productWithoutVariants = slug => [
  {
    request: {
      query: GET_PRODUCT_QUERY,
      variables: { slug }
    },
    result: {
      data: {
        productBySlug: {
          id: 'U3ByZWU6OlByb2R1Y3QtMQ==',
          slug,
          name: 'Solidus T-Shirt',
          variants: {
            nodes: []
          },
          masterVariant: {
            id: 'A3ByZWU6OlByb2R1Y3QtMQ=='
          }
        }
      }
    }
  }
]

export default productWithoutVariants
