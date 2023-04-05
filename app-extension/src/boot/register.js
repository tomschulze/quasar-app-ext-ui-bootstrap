import { boot } from 'quasar/wrappers'
import VuePlugin from '$$PKG_FULL_NAME_UI$$'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
