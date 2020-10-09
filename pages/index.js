import { CategoriesNavigation, ProductsList } from '../containers'
import { GET_TAXONOMIES_QUERY } from '../containers/categories-navigation/queries'
import { GET_PRODUCTS_QUERY } from '../containers/products-list/queries'
import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <main>
    <CategoriesNavigation />
    <ProductsList />
  </main>
)

export async function getStaticProps () {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_TAXONOMIES_QUERY
  })

  await apolloClient.query({
    query: GET_PRODUCTS_QUERY
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  }
}

export default IndexPage
