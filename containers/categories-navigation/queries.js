import { gql } from '@apollo/client'

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
