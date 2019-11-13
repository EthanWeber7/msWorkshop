'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('status route', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/status'
  })
  t.deepEqual(JSON.parse(res.payload), { status: 'ok' })
})

test('status route', async (t) => {
    const app = build(t)
  
    const res = await app.inject({
      url: '/status'
    })
    t.deepEqual(JSON.parse(res.payload), { status: 'ok' })
  })

