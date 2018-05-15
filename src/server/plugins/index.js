'use strict'

const plugins = [
  require('./auth'),
  require('./database'),
  require('./formbody'),
  require('./helmet'),
  require('./jwt'),
  require('./logger'),
  require('./routes')
]

const installPlugins = server => {
  plugins.forEach(({ install }) => {
    install(server)
  })
}

module.exports = { installPlugins }
