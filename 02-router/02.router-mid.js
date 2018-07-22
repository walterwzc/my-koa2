const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')

const home = new Router()

home.get('/', ctx => {
    ctx.body = {
        url: ctx.url,
        method: ctx.method,
        params: ctx
    }
})

// api路径之后的router
const user = new Router()
user.post('/signin', ctx => {
    ctx.body = 'signin'
}).post('/signup', ctx => {
    ctx.body = 'signup'
})

const router = new Router()

// 渲染首页
router.use('/', home.routes())

// 渲染路由页面
router.use('/api', user.routes())

app.use(router.routes())

app.listen(3001, () => {
    console.log('localhost:3001')
})
