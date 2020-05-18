const { join } = require('path')

const express = require('express')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const server = express()
const port = process.env.PORT || 3333

server.use(history())
server.use(serveStatic(join(__dirname, 'dist')))

server.listen(port, () => {
  console.log(`\n\t🚀 Running on port ${port}\n`)
})
