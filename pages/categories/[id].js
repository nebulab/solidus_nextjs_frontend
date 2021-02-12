import PropTypes from 'prop-types'

import api from 'api'

const CategoryPage = ({ category }) => {
  const { name } = category

  return (
    <article>
      <h1>{name}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const data = await api.taxonomy().all()
  const categories = data.taxonomies[0].root.taxons
  const paths = categories.map((category) => ({
    params: { id: category.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const taxonomiesData = await api.taxonomy().all()
  const category = await api
    .taxonomy({ id: taxonomiesData.taxonomies[0].id })
    .taxon({ id: params.id })
    .get()

  return { props: { category } }
}

CategoryPage.propTypes = {
  category: PropTypes.object
}

export default CategoryPage
