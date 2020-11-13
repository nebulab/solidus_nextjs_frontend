import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'
import merge from 'deepmerge'

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

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    headers: {
      'X-Spree-Order-Token': global.localStorage?.getItem('orderToken') || ''
    },
    cache: new InMemoryCache(),
    defaultOptions: process.env.NODE_ENV === 'production' ? {} : noCacheOptions
  })

const haveSpreeToken = () =>
  apolloClient.link.options.headers['X-Spree-Order-Token'] ===
  global.localStorage?.getItem('orderToken')

export function initializeApollo(initialState = null) {
  const _apolloClient =
    apolloClient && haveSpreeToken() ? apolloClient : createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache)

    _apolloClient.cache.restore(data)
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
