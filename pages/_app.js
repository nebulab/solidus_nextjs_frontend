import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import { theme } from '../theme'
import GlobalStyle from '../theme/globalStyle'
import { Global, Footer } from '../containers'
import { shape } from 'prop-types'

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
  Component: shape({}),
  pageProps: shape({})
}

export default App
