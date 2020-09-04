import { GET_PRODUCTS_QUERY } from '../ProductsList'

export const getProducts = [
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
              masterVariant: {
                images: {
                  nodes: [
                    {
                      largeUrl: 'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/39/large/solidus_tshirt.jpg'
                    },
                    {
                      largeUrl: 'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/40/large/solidus_tshirt_back.jpg'
                    }
                  ]
                }
              }
            },
            {
              id: 'U3ByZWU6OlByb2R1Y3QtMg==',
              name: 'Solidus Long Sleeve',
              masterVariant: {
                images: {
                  nodes: [
                    {
                      largeUrl: 'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/39/large/solidus_tshirt.jpg'
                    },
                    {
                      largeUrl: 'https://res.cloudinary.com/hn8kfpevp/image/upload/v1/spree/products/40/large/solidus_tshirt_back.jpg'
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
