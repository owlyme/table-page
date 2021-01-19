// import formModal from './formModal'
export default function(Vue, formModal) {

  const Modal = Vue.extend({
    extends: formModal
  })

  return ({
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
}