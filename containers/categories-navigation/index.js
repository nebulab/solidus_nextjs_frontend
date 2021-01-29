import Link from 'next/link'

const CategoriesNavigation = () => {
  const { loading, error = true } = {}

  if (error) {
    return <div>Error loading menu.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const taxonomies = []

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
