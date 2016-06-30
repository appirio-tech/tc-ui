const stylesDir = __dirname + '/src/styles'

function includePaths() {
  return require('node-neat').includePaths.concat(stylesDir)
}

module.exports = {

  includePaths: includePaths()

}
