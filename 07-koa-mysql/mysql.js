const Koa = require('koa')
const mysql = require('mysql');
const app = new Koa()

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sharebikes'
})

const getResult = () => {
  return new Promise((resolve, reject) => {
    connection.query('select * from bikes', function (error, results, fields) {
      if (error) throw error
      resolve(results)
    })
  })
}

app.use(async (ctx)=>{

  connection.connect()

  const res = await getResult()

  ctx.body = res

  connection.end()
})

app.listen(3000, ()=>{
  console.log('localhost:3000')
})
