import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import { theme } from 'theme'
import GlobalStyle from 'theme/globalStyle'
import { Global, Footer } from 'containers'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Global>
        <Component {...pageProps} />
      </Global>
      <Footer />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default App
