import Link from 'next/link'
import PropTypes from 'prop-types'

const ProductsGrid = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.slug}>
          <Link href={`/products/${encodeURIComponent(product.slug)}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductsGrid
