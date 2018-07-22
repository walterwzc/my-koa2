const Koa = require('koa')
const app = new Koa()
const { find } = require('./pool')

app.use(async ctx => {
    const data = await find('select * from bikes where bike_id=?', [
        'BJ_001_000001'
    ])
    ctx.body = data
})

app.listen(3001, () => {
    console.log('localhost:3001')
})
