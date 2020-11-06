import { useMutation } from '@apollo/client'
import { useEffect } from 'react'

import { CREATE_ORDER } from './queries'

const Global = (props) => {
  const [createOrder] = useMutation(CREATE_ORDER)

  useEffect(() => {
    if (!global.localStorage.getItem('orderToken')) {
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
