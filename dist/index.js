
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./monodefi-sdk.cjs.production.min.js')
} else {
  module.exports = require('./monodefi-sdk.cjs.development.js')
}
