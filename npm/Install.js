const Plugins = [
  // adminlte 
  //scss
{
  from: 'build/scss',
  to  : '../src/scss'
},
{
  from: 'build/js',
  to  : '../src/js/base/core'
},
  // bootstrap
  {
    from: 'node_modules/bootstrap/dist/js/bootstrap.js',
    to  : '../src/js/base/bootstrap/bootstrap.js'
 }, 
  {
      from: 'node_modules/bootstrap/scss/',
      to  : '../src/scss/bootstrap'
   },
  // plugins
  {
    from: 'plugins',
    to  : '../src/vendor'
 }, 
]

module.exports = Plugins
