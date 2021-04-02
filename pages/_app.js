import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import api from 'api'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const orderToken = Cookies.get('order-token')
    const orderNumber = Cookies.get('order-number')

    if (orderToken && orderNumber) {
      api.order({ number: orderNumber }).get()
      return
    }

    api
      .order()
      .create({ email: '' })
      .then((order) => {
        Cookies.set('order-number', order.number)
        Cookies.set('order-token', order.token)
      })
  }, [])

  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default App
