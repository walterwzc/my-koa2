const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
  ctx.cookies.set(
    'username',
    'jiazhi',
    {
      maxAge: 60 * 60 * 24
    }
  )
  ctx.body = 'ok'
})

app.listen(3000, ()=>{
  console.log('localhost:3000')
})
