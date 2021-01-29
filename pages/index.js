import { CategoriesNavigation, ProductsList } from '../containers'
import Link from 'next/link'

const IndexPage = () => (
  <main>
    <Link href="/cart">
      <a>Cart</a>
    </Link>
    <CategoriesNavigation />
    <ProductsList />
  </main>
)

export default IndexPage
