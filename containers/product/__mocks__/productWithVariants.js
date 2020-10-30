import { GET_PRODUCT_QUERY } from '../queries'

const productWithVariants = slug => [
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
          slug,
          variants: {
            nodes: [
              {
                id: 'B3ByZWU6OlByb2R1Y3QtMQ==',
                sku: 'SKU-01'
              },
              {
                id: 'C3ByZWU6OlByb2R1Y3QtMQ==',
                sku: 'SKU-02'
              }
            ]
          },
          masterVariant: {
            id: 'A3ByZWU6OlByb2R1Y3QtMQ=='
          }
        }
      }
    }
  }
]

export default productWithVariants
