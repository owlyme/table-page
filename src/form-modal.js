import Vue from 'vue'
import formModal from './formModal'

const Modal = Vue.extend({
  extends: formModal
})

export default ({
  editorConditions = [],
  onSubmit = f => f,
  onClose = f => f,
  type = 'form',
  ...others
}) => {
  const instance = new Modal().$mount()
  Object.assign(instance, {
    editorConditions,
    type,
    onSubmit,
    onClose,
    ...others
  })

  document.querySelector('body').appendChild(instance.$el)
  instance.showDialog = true

  return instance
}
