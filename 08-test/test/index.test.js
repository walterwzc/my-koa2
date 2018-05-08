const supertest = require('supertest')
const chai = require('chai')

const app = require('../index')

const expect = chai.expect
const req = supertest(app.listen())

describe('开始测试了：', () => {
  it('测试/api/signin post 是否成功', () => {
    req
      .post('/api/signin')
      .expect(200)
      .end((err, response) => {
        expect(response.body).to.be.an('object')
        expect(response.body.username).to.be.an('string')
      })
  })
  it('测试/api/list get 是否成功', () => {
    req
      .get('/api/list')
      .expect(200)
      .end((err, response) => {
        expect(response.body).to.be.an('number')
      })
  })
})
