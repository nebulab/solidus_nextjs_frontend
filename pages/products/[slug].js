import { string } from 'prop-types'
import { Product } from '../../containers'

const ProductPage = ({ slug }) => (
  <main>
    <Product slug={slug} />
  </main>
)

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  }
}

ProductPage.propTypes = {
  slug: string.isRequired
}

export default ProductPage
