'use strict'

const { test } = require('tap')
const { build } = require('../helper')

// test('test route', (t) => {
//   t.plan(2)
//   const app = build(t)

//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.deepEqual(JSON.parse(res.payload), { root: true })
//   })
// })

// If you prefer async/await, use the following

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
