import ProductList from '.'

import { products } from './__mocks__/products'

export default {
  title: 'Product list',
  component: ProductList
}

const Template = args => <ProductList {...args} />

export const ProductListComponent = Template.bind({})

ProductListComponent.args = {
  mocks: products
}
