import fastifyApollo from '@as-integrations/fastify'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import Fastify from 'fastify'

import { createApolloServer } from './graphql/server.js'

const PORT = 65_535

const app = Fastify()

const apollo = createApolloServer({ app })

await apollo.start()

await app.register(helmet, {
  contentSecurityPolicy: false,
})
await app.register(rateLimit)
await app.register(cors)
await app.register(compress)
await app.register(fastifyApollo(apollo))

app.get('/', () => 'This is web-application-template-admin backend!')

try {
  await app.listen({ host: '0.0.0.0', port: PORT })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
