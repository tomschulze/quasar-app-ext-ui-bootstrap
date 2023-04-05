/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf, api) {
  // register our boot file
  conf.boot.push('~$$PKG_FULL_NAME_EXT$$/src/boot/register.js')

  if (api.hasVite !== true) {
    // make sure app extension files & ui package gets transpiled
    conf.build.transpileDependencies.push(/$$PKG_NAME_EXT$$[\\/]src/)
  }
  
  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~$$PKG_FULL_NAME_UI$$/src/index.sass')
}

module.exports = function (api) {
  if (api.hasVite) {
    api.compatibleWith('@quasar/app-vite', '^1.0.0')
  }
  
  else if (api.hasWebpack) {
    api.compatibleWith('@quasar/app-webpack', '^3.4.0')
  }
  
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app-*" CLI
  api.compatibleWith('quasar', '^2.0.0')
  
  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('$$COMPONENT_NAME$$', '~$$PKG_FULL_NAME_UI$$/src/components/$$COMPONENT_NAME$$.json')

  api.extendQuasarConf(extendConf)
}



  






