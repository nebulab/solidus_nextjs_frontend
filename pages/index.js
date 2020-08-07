import ProductsGrid, { GET_PRODUCTS_QUERY } from '../containers/products/ProductsGrid'
import AppHeader, { GET_TAXONOMIES_QUERY } from '../containers/navigation/AppHeader'
import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <main>
    <AppHeader />
    <ProductsGrid />
  </main>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_TAXONOMIES_QUERY
  })

  await apolloClient.query({
    query: GET_PRODUCTS_QUERY
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1
  }
}

export default IndexPage
