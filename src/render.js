export default {
  name: 'render',
  props: {
    render: {
      type: Function,
      default: f => f
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  render(h) {
    return this.render(h, this.data)
  }
}
