import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import { useApollo } from '../lib/apolloClient'
import { theme } from '../lib/theme'

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
