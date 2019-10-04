const Plugins = [
    // adminlte 
    //scss
  {
    from: 'AdminLTE/build/scss',
    to  : 'src/scss'
  },
  {
    from: 'AdminLTE/build/js',
    to  : 'src/js/base/core'
  },
    // bootstrap
    {
      from: 'AdminLTE/node_modules/bootstrap/dist/js/bootstrap.js',
      to  : 'src/js/base/bootstrap/bootstrap.js'
   }, 
    {
        from: 'AdminLTE/node_modules/bootstrap/scss/',
        to  : 'src/scss/bootstrap'
     },
    // plugins
    {
      from: 'AdminLTE/plugins',
      to  : 'src/vendor'
   }, 
]

module.exports = Plugins
