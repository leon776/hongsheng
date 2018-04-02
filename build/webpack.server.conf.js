'use strict'
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueSSRServerPlugin = require('vue-ssr-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const env = require('../config/prod.env')

function getExternals() {
  return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(filename => !filename.includes('.bin'))
    .reduce((externals, filename) => {
        externals[filename] = `commonjs ${filename}`
        return externals
    }, {})
}

const webpackConfig = merge(baseWebpackConfig, {
  context: path.resolve(__dirname, '..'),
  node: {
    // __filename: true,
    __dirname: 'mock',
  },
  target: 'node',
  entry: './src/entry.server.js',
  output: {
    path: config.build.assetsRoot,
    libraryTarget: 'commonjs2',
  },
  watch: true,
  externals: getExternals(),

  plugins: [
    // ssr
    new VueSSRServerPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
      'process.env.VUE_ENV': '"server"'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets/'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }, {
        from: path.resolve(__dirname, '../src/server.js'),
        to: config.build.assetsRoot
      }, {
        from: path.resolve(__dirname, '../src/index.template.html'),
        to: config.build.assetsRoot
      }, {
        from: path.resolve(__dirname, '../src/api/'),
        to: path.join(config.build.assetsRoot, 'api')
      }
    ]),
  ]
})

module.exports = webpackConfig
