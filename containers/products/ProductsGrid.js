import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

import ProductCard from '../../components/products/ProductCard'

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

const Grid = styled.ul`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  margin: 0 auto;
  max-width: 114rem;
  padding: 3rem;
`

export default function ProductsGrid() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)

  if (error) {
    return <div>Error loading posts.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const products = data.products.nodes

  return (
    <Grid>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard>
            <section>
              <img src={product.masterVariant.images.nodes[0].largeUrl} />
            </section>
            <header>
              <h1>
                {product.name}
              </h1>
            </header>
          </ProductCard>
        </li>
      ))}
    </Grid>
  )
}
