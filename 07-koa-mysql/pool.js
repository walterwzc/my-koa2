var mysql = require('mysql')

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'sharebikes'
})

const find = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, function (error, results, fields) {
      if (error) reject()
      resolve(results)
    })
  })
}

module.exports = { find }
