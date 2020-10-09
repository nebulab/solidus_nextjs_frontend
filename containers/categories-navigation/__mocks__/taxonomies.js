import { GET_TAXONOMIES_QUERY } from '../queries'

export const taxonomies = [
  {
    request: {
      query: GET_TAXONOMIES_QUERY
    },
    result: {
      data: {
        taxonomies: {
          __typename: 'TaxonomyConnection',
          nodes: [
            {
              __typename: 'Taxonomy',
              id: 'U3ByZWU6OlRheG9ub215LTE=',
              name: 'Categories',
              rootTaxon: {
                __typename: 'Taxon',
                name: 'Categories',
                children: {
                  __typename: 'TaxonConnection',
                  nodes: [
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTM=',
                      name: 'Clothing',
                      permalink: 'categories/clothing'
                    },
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTQ=',
                      name: 'Caps',
                      permalink: 'categories/caps'
                    },
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTU=',
                      name: 'Bags',
                      permalink: 'categories/bags'
                    },
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTY=',
                      name: 'Mugs',
                      permalink: 'categories/mugs'
                    },
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTEy',
                      name: 'New node',
                      permalink: 'categories/new-node'
                    }
                  ]
                }
              }
            },
            {
              __typename: 'Taxonomy',
              id: 'U3ByZWU6OlRheG9ub215LTI=',
              name: 'Brand',
              rootTaxon: {
                __typename: 'Taxon',
                name: 'Brand',
                children: {
                  __typename: 'TaxonConnection',
                  nodes: [
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTEw',
                      name: 'Solidus',
                      permalink: 'brand/solidus'
                    },
                    {
                      __typename: 'Taxon',
                      id: 'U3ByZWU6OlRheG9uLTEx',
                      name: 'Ruby',
                      permalink: 'brand/ruby'
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
]
