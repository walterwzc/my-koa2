const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const path = require('path')

app.use(static(path.join(__dirname, './static')))

app.use(async (ctx)=>{

})
app.listen(3000, ()=>{
  console.log('localhost:3000')
})
