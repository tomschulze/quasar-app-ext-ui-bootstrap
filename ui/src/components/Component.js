import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: '$$COMPONENT_NAME$$',

  setup () {
    return () => h(QBadge, {
      class: '$$COMPONENT_NAME$$',
      label: '$$COMPONENT_NAME$$'
    })
  }
}
