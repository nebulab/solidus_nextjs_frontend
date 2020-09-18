import { ProductsList } from '../components'
import { GET_PRODUCTS_QUERY } from '../components/products-list/queries'
import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <main>
    <ProductsList />
  </main>
)

export async function getStaticProps () {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_PRODUCTS_QUERY
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    unstable_revalidate: 1
  }
}

export default IndexPage
