const readline = require('readline')
const fs = require("fs")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const excludeDirNames = ['node_modules', '.git']
const excludeFileNames = ['bootstrap.js']

const getFiles = (dir, files_) => {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (let i in files){
      const name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
          const dirIsExcluded = excludeDirNames.some((el) => name.endsWith(el))
          if (!dirIsExcluded) {
            getFiles(name, files_);
          }
      } else {
        const fileIsExcluded = excludeFileNames.some((el) => name.endsWith(el))
        if (!fileIsExcluded) {
          files_.push(name);
        }
      }
  }
  return files_;
}

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase())

const getUmdVersion = ({appName}) => {
  let name = appName[0].toUpperCase() + appName.slice(1)
  name = camelize(name)
  return `quasar${name}`
}

const getInstallName = ({appOrg, appName}) => { return `@${appOrg}/${appName}` }
const getExtensionName = ({appOrg, appName}, noOrgFlag) => {
  if (noOrgFlag) {
    return `quasar-app-extension-${appName}`  
  }

  return `@${appOrg}/quasar-app-extension-${appName}`
}

const getUiName = ({appOrg, appName}, noOrgFlag) => {
  if (noOrgFlag) {
    return `quasar-ui-${appName}`  
  }

  return `@${appOrg}/quasar-ui-${appName}`
}

const escapeRegExp = (string_) => {
  return string_.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

(async () => {
  const appOrg = await prompt("Type the name of the organization (kebab-case; e.g.: my-org): ")
  const appName = await prompt("Type the name of extension (kebap-case; e.g.: my-extension): ")
  const componentName = await prompt("Type name of the component (PascalCase; e.g.: MyComponent): ")
  const author = await prompt("Type your full name (e.g. Jane Doe): ")
  const email = await prompt("Type your email (e.g. jane.doe@test.com): ")
  const customRegistryUrl = await prompt("Type your custom registry url w/o 'https://' (e.g. registry.mydomain.com): ")

  inputs = {
    appOrg,
    appName,
    componentName,
    author,
    email
  }

  const authorEmail = `${author} <${email}>`
  const umdName = getUmdVersion(inputs)
  const installName = getInstallName(inputs)
  const noOrgExtensionName = getExtensionName(inputs, true)
  const extensionName = getExtensionName(inputs)
  const noOrgUiName = getUiName(inputs, true)
  const uiName = getUiName(inputs)

  replaceMap = {
    '$$UMD_NAME$$': umdName,
    '$$PKG_INSTALL_NAME$$': installName,
    '$$PKG_FULL_NAME_EXT$$': extensionName,
    '$$PKG_FULL_NAME_UI$$': uiName,
    '$$PKG_NAME_EXT$$': noOrgExtensionName,
    '$$PKG_NAME_UI$$': noOrgUiName,
    '$$APP_NAME$$': appName,
    '$$COMPONENT_NAME$$': componentName,
    '$$AUTHOR$$': authorEmail,
    '$$REGISTRY$$': customRegistryUrl
  }

  const files = getFiles(__dirname)
  files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf-8')
    let dataToReplace = data

    Object.keys(replaceMap).forEach((string_) => {
      const regex = escapeRegExp(string_)
      const regexp = new RegExp(regex, 'g')
      dataToReplace = dataToReplace.replace(regexp, replaceMap[string_])
    })

    if (data !== dataToReplace) {
      try {
        fs.writeFileSync(file, dataToReplace)
        console.log(`✨ ${file} was adapted`)
      } catch (error) {
        console.error(`🧨 ${file} was not saved: ${err}`)
      }
    }
  })

  console.log('🧽 Cleaning up. Removing .git folder and bootstrap.js')
  fs.rmSync(__dirname + '/.git', { recursive: true, force: true })
  fs.rmSync(__dirname + '/bootstrap.js')
  process.exit()
})()
