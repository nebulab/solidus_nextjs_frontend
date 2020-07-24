import PostList, { GET_PRODUCTS_QUERY } from '../components/ProductsList'
import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <main>
    <PostList />
  </main>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

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
