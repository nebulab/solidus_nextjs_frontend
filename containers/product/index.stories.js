import Product from '.'

import { productWithVariants, productWithoutVariants } from './__mocks__'

export default {
  title: 'Product',
  component: Product
}

const Template = (args) => <Product {...args} />

const slug = 'solidus-t-shirt'

export const ProductComponentWithVariants = Template.bind({})
ProductComponentWithVariants.args = {
  mocks: productWithVariants(slug),
  slug
}

export const ProductComponentWithoutVariants = Template.bind({})
ProductComponentWithoutVariants.args = {
  mocks: productWithoutVariants(slug),
  slug
}
