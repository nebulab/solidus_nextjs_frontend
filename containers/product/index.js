import { useQuery, useMutation } from '@apollo/client'
import { Formik, Field, Form } from 'formik'

import { GET_PRODUCT_QUERY, ADD_TO_CART } from './queries'

const Product = ({ slug }) => {
  const [addToCart] = useMutation(ADD_TO_CART)
  const { loading, error, data } = useQuery(GET_PRODUCT_QUERY, {
    variables: { slug }
  })

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

  const onSubmit = values => {
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
          {productBySlug.variants.nodes.map(variant => (
            <div key={variant.id}>
              <label>
                <Field type='radio' name='variantId' value={variant.id} />
                {variant.sku}
              </label>
            </div>
          ))}

          <Field id='quantity' name='quantity' type='number' />

          <button type='submit'>Add to Cart</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Product
