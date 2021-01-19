import $formModal from './form-modal'
import formModal from './formModal'
import table from './table'
import render from './render'
import tableHeader from './table-header'
import box from './box'

const componentList = [
  { name: 'sn-form-modal', component: formModal },
  { name: 'sn-table', component: table },
  { name: 'sn-render', component: render },
  { name: 'sn-table-header', component: tableHeader },
  { name: 'sn-box', component: box }
]

export default {
  install: function(Vue, options) {
    Vue.prototype.$formModal = $formModal(Vue, formModal)

    componentList.forEach(({ name, component }) => {
      Vue.component(name, component)
    })
  }
}