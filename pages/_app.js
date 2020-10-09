import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import 'normalize.css'

import { useApollo } from '../lib/apolloClient'
import { theme } from '../lib/theme'

const GlobalStyle = createGlobalStyle`
  a {
    color: ${(props) => props.theme.colors.copy.light};
  }
`

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
