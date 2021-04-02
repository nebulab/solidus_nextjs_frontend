import Link from 'next/link'
import PropTypes from 'prop-types'

import api from 'api'

import CategoriesNavigation from 'components/navigation/CategoriesNavigation'
import ProductsGrid from 'components/products/ProductsGrid'

const IndexPage = ({ categories, products }) => (
  <main>
    <Link href="/cart">
      <a>Cart</a>
    </Link>
    <CategoriesNavigation categories={categories} />
    <ProductsGrid products={products} />
  </main>
)

export async function getStaticProps() {
  const productsData = await api.product().all()
  const products = productsData.products

  const taxonomiesData = await api.taxonomy().all()
  const categories = taxonomiesData.taxonomies[0].root.taxons

  return {
    props: {
      categories,
      products
    }
  }
}

IndexPage.propTypes = {
  categories: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired
}

export default IndexPage
