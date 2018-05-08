const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const Handlebars = require('handlebars')
const ejs = require('ejs')
const fs = require('fs')

app.use(views(path.join(__dirname, './views'), {
  map: {
    hbs: 'handlebars',
    ejs: 'ejs'
  }
}))

app.use(async (ctx)=>{
  await ctx.render('index.hbs', {
    title: 'views'
  })

  // let template = ejs.render("<div><%- title %></div>", {title: 'jiazhi'});
  // console.log(template);

  // fs.writeFile('./static/html/index.html', template, (err, data) => {
  //   console.log('ok')
  // })
})

app.listen(3000, ()=>{
  console.log('localhost:3000')
})
