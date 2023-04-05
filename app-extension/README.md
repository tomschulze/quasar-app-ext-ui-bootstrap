# Quasar App Extension $$APP_NAME$$

Put description here.

# Install
```bash
quasar ext add $$PKG_INSTALL_NAME$$
```
Quasar CLI will retrieve it from NPM and install the extension.

## Local test install w/o publishing to npm

```bash
cd app-extension && yarn link && cd ..
cd ui && yarn && yarn build && yarn link && cd ..

yarn create quasar

cd project_name && \
  yarn link "$$PKG_FULL_NAME_EXT$$" && \
  yarn link "$$PKG_FULL_NAME_UI$$" && \
  quasar ext invoke $$PKG_INSTALL_NAME$$
```


## Prompts

> If your app extension uses prompts, explain them here, otherwise remove this section and remove prompts.js file.

# Uninstall
```bash
quasar ext remove $$PKG_INSTALL_NAME$$
```

# Info
> Add longer information here that will help the user of your app extension.

# Other Info
> Add other information that's not as important to know

# License
MIT (c) $$AUTHOR$$
