import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../../components/brand/Logo'
import HorizontalNav from '../../components/navigation/HorizontalNav'

export const GET_TAXONOMIES_QUERY = gql`
  query GetTaxonomies {
    taxonomies {
      nodes {
        id
        name
        rootTaxon {
          name
          children {
            nodes {
              id
              name
              permalink
            }
          }
        }
      }
    }
  }
`

const Header = styled.header``

const Topbar = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 96rem;
`

export default function AppHeader() {
  const { loading, error, data } = useQuery(GET_TAXONOMIES_QUERY)

  if (error) {
    return <div>Error loading posts.</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  const taxonomies = data.taxonomies.nodes[0].rootTaxon.children.nodes;

  return (
    <Header>
      <Topbar>
        <Logo src="/logo.svg" />
        <HorizontalNav alignRight>
          <ul>
            <li>
              <Link href="/">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cart</a>
              </Link>
            </li>
          </ul>
        </HorizontalNav>
      </Topbar>

      <HorizontalNav>
        <ul>
          <li>
            <Link href="/">
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
      </HorizontalNav>
    </Header>
  )
}
