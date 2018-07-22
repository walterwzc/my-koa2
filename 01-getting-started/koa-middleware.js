const log = args => {
    console.log(args)
}

const printLog = args => {
    return async (ctx, next) => {
        console.log('in printLog method')
        log(args)
        await next()
    }
}

module.exports = printLog
