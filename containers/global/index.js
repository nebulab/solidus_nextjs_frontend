import { useEffect } from 'react'

const Global = (props) => {
  const [createOrder] = []

  useEffect(() => {
    if (!global.localStorage.getItem('orderToken') && createOrder) {
      createOrder({ variables: { input: {} } }).then(({ data }) => {
        global.localStorage.setItem(
          'orderToken',
          data.createOrder.order.guestToken
        )
      })
    }
  }, [])

  return props.children
}

export default Global
