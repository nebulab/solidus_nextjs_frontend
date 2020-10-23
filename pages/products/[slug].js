import { Product } from '../../containers'
import { GET_PRODUCT_QUERY } from '../../containers/product/queries'
import { initializeApollo } from '../../lib/apolloClient'

const ProductPage = ({ slug }) => (
  <main>
    <Product slug={slug} />
  </main>
)

export async function getServerSideProps ({ params }) {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_PRODUCT_QUERY,
    variables: { slug: params.slug }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.slug
    }
  }
}

export default ProductPage
