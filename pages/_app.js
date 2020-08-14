import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { useApollo } from '../lib/apolloClient'

const theme = {
  colors: {
    accent: '#0070f3'
  }
}

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
