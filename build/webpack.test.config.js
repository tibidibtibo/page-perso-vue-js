const base = require('./webpack.base.config.js')

let config = Object.assign({}, base, {})

delete config.entry

module.exports = config
