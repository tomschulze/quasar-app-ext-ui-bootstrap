# Quasar App (dev)
Isolated test environment for the app extension. Includes component tests that are run when ui is built.

## Adding Testing Components
in the `src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
# don't forget to run yarn or yarn install when using quasar dev for the first time
quasar dev
```


### Lint the files
```bash
yarn lint
```


### Format the files
```bash
yarn format
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
