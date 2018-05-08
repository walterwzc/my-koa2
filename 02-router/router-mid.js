const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')

const home = new Router()
home
  .get('/', (ctx) => {
    ctx.body = {
      url: ctx.url,
      method: ctx.method,
      params: ctx
    }
  })

const user = new Router()
user
  .post('/signin', (ctx) => {
    ctx.body = 'signin'
  })
  .post('/signup', (ctx) => {
    ctx.body = 'signup'
  })

const router = new Router()
router.use('/api', user.routes())
router.use('/', home.routes())

app.use(router.routes())

app.listen(3000, () => {
  console.log('localhost:3000');
})
