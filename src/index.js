import $formModal from './form-modal'
import formModal from './formModal.vue'
import table from './table.vue'
import render from './render'
import tableHeader from './table-header.vue'
import box from './box.vue'
import timeRange from './timeRange'
import select from './select'
import { createFormData } from './tools'
const componentList = [
  { name: 'sn-form-modal', component: formModal },
  { name: 'sn-table', component: table },
  { name: 'sn-render', component: render },
  { name: 'sn-table-header', component: tableHeader },
  { name: 'sn-box', component: box },
  { name: 'sn-time-range', component: timeRange },
  { name: 'sn-select', component: select }
]

const SnTable = {
  install: function(Vue, options) {
    Vue.prototype.$snFormModal = $formModal(Vue, formModal)
    Vue.prototype.$snInitFormData = createFormData
    componentList.forEach(({ name, component }) => {
      Vue.component(name, component)
    })
  }
}
export default SnTable