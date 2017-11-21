const path = require('path')

const rootDir = path.join(__dirname, '..')
const configDir = path.join(rootDir, 'config')
const sourceDir = path.join(rootDir, 'src')
const clientDir = path.join(sourceDir, 'client')
const serverDir = path.join(sourceDir, 'server')
const viewsDir = path.join(serverDir, 'views')
const distDir = path.join(rootDir, 'dist')

// build inputs
const webpackDir = path.join(configDir, 'webpack')
const clientEntry = path.join(clientDir, 'index.js')
const serverEntry = path.join(serverDir, 'index.js')



module.exports = {
  // directories
  rootDir,
  sourceDir,
  serverDir,
  viewsDir,
  distDir,

  // entry points
  clientEntry,
  serverEntry,
};
