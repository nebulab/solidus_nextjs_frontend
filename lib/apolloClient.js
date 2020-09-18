import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient

const noCacheOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const createApolloClient = () => (
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI
    }),
    cache: new InMemoryCache(),
    defaultOptions: process.env.ENV === 'test'
      ? noCacheOptions
      : {}
  })
)

export function initializeApollo (initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return _apolloClient
  }

  if (!apolloClient) {
    apolloClient = _apolloClient
  }

  return _apolloClient
}

export function useApollo (initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
