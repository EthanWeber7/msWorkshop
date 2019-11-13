'use strict'

const S = require('fluent-schema')

async function getService (fastify, opts) {

  const response = {
    200: S.object()
      .prop('id', S.string())
      .prop('text', S.string())
      .prop('time', S.string())
      .prop('user', S.string())
      .prop('topics', S.array().items(S.string()))
  }
  
  const schema = {
    response
  }

  fastify.route({
    method: 'GET',
    path: '/post/:id',
    handler: onGetPost,
    onRequest: fastify.basicAuth,
    schema
  })

async function onGetPost (req, reply) {

    const { body, statusCode } = await this.elastic.get({
        index: 'tweets',
        id: req.params.id
      }, {
        ignore: [404]
      })

      if (statusCode === 404) {
        reply.code(404)
        return new Error('Not Found')
      }

    return body._source
  }
}

module.exports = getService