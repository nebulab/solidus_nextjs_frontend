import PropTypes from 'prop-types'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default App
