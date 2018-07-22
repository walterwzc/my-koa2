const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

const readfile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./views/${filename}`, 'utf-8', (err, data) => {
            if (err) {
                reject()
            }
            resolve(data)
        })
    })
}

app.use(async ctx => {
    let data = null

    console.log(ctx)

    switch (ctx.url) {
        case '/':
            data = await readfile('index.html')
            break
        default:
            data = await readfile('404.html')
    }
    ctx.body = data
})

app.listen(3001, () => {
    console.log('server is running at 3001')
})
