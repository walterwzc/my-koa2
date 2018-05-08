const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use((ctx) => {
  const users = ctx.request.body
  ctx.body = {
    users
  }
})

app.listen(3000, () => {
  console.log('localhost:3000')
})
