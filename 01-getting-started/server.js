const Koa = require('koa')
const app = new Koa()
const printLog = require('./koa-middleware')

app.use(printLog('abc'))

// app.use(async (ctx) => {
//     ctx.body = 'hello world'
// })

const mainProcess = ctx => {
    ctx.body = 'hello world'
}

app.use(mainProcess)

app.listen(3001, () => {
    console.log('localhost:3001')
})
