const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 解析form数据
app.use(bodyParser())


// 以POST发送的数据，FORM URL ENCODED => 形式的数据会在 request.body 之中，发送之后，可以显示在页面上
app.use(ctx => {
    const users = ctx.request.body
    ctx.body = {
        users
    }
})

app.listen(3001, () => {
    console.log('localhost:3001')
})
