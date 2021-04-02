import Cookies from 'js-cookie'
import { Solidus } from 'solidus-sdk'

// TODO: move below values to env.local

let api = new Solidus({ href: 'http://localhost:3000' })

if (global.window) {
  const token = Cookies.get('order-token')
  api =
    token && token !== 'undefined'
      ? new Solidus({
          href: 'http://localhost:3000',
          headers: {
            'X-Spree-Order-Token': token
          }
        })
      : new Solidus({ href: 'http://localhost:3000' })
}

export function getOrder() {
  const orderNumber = Cookies.get('order-number')
  return api.order({ number: orderNumber }).get()
}

export function addToCart(id) {
  const orderNumber = Cookies.get('order-number')
  return api.order({ number: orderNumber }).lineItem().create({
    quantity: 1,
    variant_id: id
  })
}

export function removeFromCart(id) {
  const orderNumber = Cookies.get('order-number')
  return api.order({ number: orderNumber }).lineItem().delete({ id })
}

export default api
