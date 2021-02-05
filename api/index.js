import { Solidus } from 'solidus-sdk'

// TODO: move below values to env.local

const api = new Solidus({ href: 'http://localhost:3000' })

export default api
