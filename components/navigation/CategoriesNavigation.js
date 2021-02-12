import Link from 'next/link'
import PropTypes from 'prop-types'

const CategoriesNavigation = ({ categories }) => {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${encodeURIComponent(category.id)}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

CategoriesNavigation.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesNavigation
