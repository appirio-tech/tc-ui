require('./node_modules/coffee-script/register')

const branch = process.env.TRAVIS_BRANCH

if (branch === 'master') process.env.ENV = 'PROD'
if (branch === 'dev')    process.env.ENV = 'DEV'
if (branch === 'qa')     process.env.ENV = 'QA'

const webpackConfig = require('appirio-tech-webpack-config')

const config = webpackConfig({
  dirname: __dirname,
  template: './src/index.html',
  entry: {
    app: ['./src/index']
  }
})

// Adding react hot loader
const babelOptions = {
  presets: [ 'es2015', 'react', 'stage-2' ],
  plugins: [ 'lodash' ]
}

const jsxLoader = {
  test: /\.(js|jsx)$/,
  loaders: [
    'react-hot',
    'babel?' + JSON.stringify(babelOptions)
  ],
  exclude: /node_modules\/(?!appirio-tech.*|topcoder|tc-)/
}

// Loop over loaders and replace
config.module.loaders.forEach((loader, i, loaders) => {
  if (loader.loader === 'babel' && String(loader.test) === String(/\.(js|jsx)$/)) {
    jsxLoader.include = loader.include
    loaders[i] = jsxLoader
  }
})

module.exports = config
