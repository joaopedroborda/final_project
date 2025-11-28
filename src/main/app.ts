import fastify from 'fastify'

import { IndexRoute } from './routes/index.route'
const app = fastify()

app.register(IndexRoute, { prefix: '/' })

export { app }