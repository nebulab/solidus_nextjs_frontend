import { GET_PRODUCTS_QUERY } from '../queries'

export const products = [
  {
    request: {
      query: GET_PRODUCTS_QUERY
    },
    result: {
      data: {
        products: {
          nodes: [
            {
              id: 'U3ByZWU6OlByb2R1Y3QtMQ==',
              name: 'Solidus T-Shirt',
              slug: 'solidus-t-shirt',
              masterVariant: {
                images: {
                  nodes: [
                    {
                      largeUrl:
                        'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/39/large/solidus_tshirt.jpg'
                    },
                    {
                      largeUrl:
                        'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/40/large/solidus_tshirt_back.jpg'
                    }
                  ]
                }
              }
            },
            {
              id: 'U3ByZWU6OlByb2R1Y3QtMg==',
              name: 'Solidus Long Sleeve',
              slug: 'solidus-long-sleeve',
              masterVariant: {
                images: {
                  nodes: [
                    {
                      largeUrl:
                        'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/39/large/solidus_tshirt.jpg'
                    },
                    {
                      largeUrl:
                        'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/40/large/solidus_tshirt_back.jpg'
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
]
