import { CREATE_ORDER } from '../queries'

const createOrder = [
  {
    request: {
      query: CREATE_ORDER,
      variables: {
        input: {}
      }
    },
    result: {
      data: {
        createOrder: {
          order: {
            number: 'R516567084',
            guestToken: 'X9tMeNr0vDEi1eluSKN_AQ'
          }
        }
      }
    }
  }
]

export default createOrder
