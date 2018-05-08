const log = (args) => {
  console.log(args);
}

const printLog = (args) => {
  return async (ctx, next) => {
    log(args)
    await next()
  }
}

module.exports = printLog
