import Product from '.'

import { product } from './__mocks__/product'

export default {
  title: 'Product',
  component: Product
}

const Template = args => <Product {...args} />

export const ProductComponent = Template.bind({})

const slug = 'solidus-t-shirt'

ProductComponent.args = {
  mocks: product(slug),
  slug
}
