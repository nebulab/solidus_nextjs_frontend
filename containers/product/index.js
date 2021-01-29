import { Formik, Field, Form } from 'formik'
import { string } from 'prop-types'

const Product = ({ slug }) => {
  const [addToCart] = []
  const { loading, error = true, data } = {}

  if (error) {
    return <div>Error loading product.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { productBySlug } = data

  const hasVariants = () => productBySlug.variants.nodes.length > 0
  const defaultVariantId = () =>
    hasVariants()
      ? productBySlug.variants.nodes[0].id
      : productBySlug.masterVariant.id

  const onSubmit = (values) => {
    addToCart({
      variables: {
        variantId: values.variantId,
        quantity: values.quantity
      }
    })
  }

  return (
    <div>
      <h1>{productBySlug.name}</h1>
      <Formik
        initialValues={{
          quantity: 1,
          variantId: defaultVariantId()
        }}
        onSubmit={onSubmit}
      >
        <Form>
          {productBySlug.variants.nodes.map((variant) => (
            <div key={variant.id}>
              <label>
                <Field type="radio" name="variantId" value={variant.id} />
                {variant.sku}
              </label>
            </div>
          ))}

          <Field id="quantity" name="quantity" type="number" />

          <button type="submit">Add to Cart</button>
        </Form>
      </Formik>
    </div>
  )
}

Product.propTypes = {
  slug: string.isRequired
}

export default Product
