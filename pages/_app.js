import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import { useApollo } from '../lib/apolloClient'
import { theme } from '../theme'
import GlobalStyle from '../theme/globalStyle'
import { Global, Footer } from '../containers'
import { shape } from 'prop-types'

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Global>
          <Component {...pageProps} />
        </Global>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: shape({}),
  pageProps: shape({})
}

export default App
