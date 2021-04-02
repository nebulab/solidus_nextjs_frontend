import PropTypes from 'prop-types'

import api, { addToCart } from 'api'

const ProductPage = ({ product }) => {
  const { description, display_price, name } = product

  return (
    <article>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{display_price}</p>
      {product.variants.length > 0 ? (
        <ul>
          {product.variants.map((variant) => (
            <li key={variant.id}>
              {variant.name} ({variant.display_price})
              <button onClick={() => addToCart(variant.id)}>Add to cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          {product.master.name} ({product.master.display_price})
          <button onClick={() => addToCart(product.master.id)}>
            Add to cart
          </button>
        </p>
      )}
    </article>
  )
}

export async function getStaticPaths() {
  const data = await api.product().all()
  const products = data.products
  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await api.product({ id: params.slug }).get()
  return { props: { product } }
}

ProductPage.propTypes = {
  product: PropTypes.object
}

export default ProductPage
