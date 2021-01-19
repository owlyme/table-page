<template>
  <el-input
    :value="value"
    :placeholder="placeholder || '请选择'"
    type="textarea"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  name: 'SnTextarea',
  components: {},
  props: {
    value: {
      type: [String],
      default: ''
    },
    placeholder: {
      type: [String],
      default: ''
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped ></style>
