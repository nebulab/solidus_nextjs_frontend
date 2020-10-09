import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
}

const Template = (args) => <Footer {...args} />

export const DefaultFooter = Template.bind({})
DefaultFooter.args = {}
