'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/status', function (request, reply) {
    reply.send({ status: 'ok' })
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
