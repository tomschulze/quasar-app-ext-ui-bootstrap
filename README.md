## Quasar app extension UI bootstrapper 

Boilerplate code for developing quasar app extensions with vite instead of webpack. Adopted from `yarn create quasar` ui kit scaffolding.

Clone the repo and run `node bootstrap.js` from project root to setup. The `.git` folder and `bootstrap.js` will be removed automatically. The code is not usable w/o running `bootstrap.js`.

## TODO
* [ ] make bootstrapping more flexible, currently it only works for packages with org names e.g., `@my-org/mypackage`
* [x] mv `dev` to `ui/` as is done in the original starter kit
  * like this a ui build is not necessary, neither is watching changes to trigger HMR in `quasar dev`
  * however that requires bundling exercises with vite (see https://github.com/vitejs/vite/issues/136)
* [x] use variable replacements for bootstrapping instead of string replacements; as is done with `AUTHOR`

## Structure
* [/ui](ui) - standalone npm package
  * [/ui/dev](ui/dev/) - Playground to test and/or develop the extension
* [/app-extension](app-extension) - Quasar app extension

