# Components $$COMPONENT_NAME$$

**Compatible with Quasar UI v2 and Vue 3**.


# Component $$COMPONENT_NAME$$
Enter description here.

`<$$COMPONENT_NAME$$ />`


# Usage

## Quasar CLI project


Install the [App Extension](../app-extension).

**OR**:


Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from '$$PKG_FULL_NAME_UI$$'
import '$$PKG_FULL_NAME_UI$$/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="$$PKG_FULL_NAME_UI$$/dist/index.css"></style>

<script>
import { Component as $$COMPONENT_NAME$$ } from '$$PKG_FULL_NAME_UI$$'

export default {
  
  components: {
    $$COMPONENT_NAME$$
  }
  
  
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from '$$PKG_FULL_NAME_UI$$'
import '$$PKG_FULL_NAME_UI$$/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="$$PKG_FULL_NAME_UI$$/dist/index.css"></style>

<script>
import { Component as $$COMPONENT_NAME$$ } from '$$PKG_FULL_NAME_UI$$'

export default {
  
  components: {
    $$COMPONENT_NAME$$
  }
  
  
}
</script>
```

## UMD variant

Exports `window.$$UMD_NAME$$`.

Download the built js and css and put it in a public folder in your web root. E.g. `js` and `css`. Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="css/$$PKG_NAME_UI$$/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="js/$$PKG_NAME_UI$$/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="css/$$PKG_NAME_UI$$/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Building package
```bash
$ yarn
$ yarn build
```

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.
