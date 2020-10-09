import CategoriesNavigation from '.'

import { taxonomies } from './__mocks__/taxonomies'

export default {
  title: 'Categories navigation',
  component: CategoriesNavigation
}

const Template = (args) => <CategoriesNavigation {...args} />

export const CategoriesNavigationComponent = Template.bind({})

CategoriesNavigationComponent.args = {
  mocks: taxonomies
}
