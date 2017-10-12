const mix = require('laravel-mix')
const webpack = require('webpack')

mix.postCss('_static/app.css', 'static/', [
  require('postcss-import')({
    from: '_static/app.css'
  }),
  require('cssnano')()
])
