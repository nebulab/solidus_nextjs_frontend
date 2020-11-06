import { useQuery } from '@apollo/client'
import Link from 'next/link'

import { GET_TAXONOMIES_QUERY } from './queries'

const CategoriesNavigation = () => {
  const { loading, error, data } = useQuery(GET_TAXONOMIES_QUERY)

  if (error) {
    return <div>Error loading menu.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const taxonomies = data.taxonomies.nodes[0].rootTaxon.children.nodes

  return (
    <nav>
      <ul>
        <li>
          <Link href="/products">
            <a>All</a>
          </Link>
        </li>
        {taxonomies.map(({ id, name, permalink }) => (
          <li key={id}>
            <Link href={`/${permalink}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoriesNavigation
