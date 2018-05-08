const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
  console.log(ctx.method)
  if (ctx.method == 'POST' && ctx.url == '/api/signin') {
    ctx.body = {
      username: 'abc',
      password: 123
    }
  } else {
    ctx.body = 123
  }
})

module.exports = app

app.listen(3000, ()=>{
  console.log('localhost:3000')
})
