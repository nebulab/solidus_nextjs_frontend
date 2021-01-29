import Link from 'next/link'

const ProductsList = () => {
  const { loading, error = true, data } = {}

  if (error) {
    return <div>Error loading posts.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const { products } = data

  return (
    <ul>
      {products.nodes.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${encodeURIComponent(product.slug)}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductsList
