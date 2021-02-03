<template>
  <el-date-picker
    :value="value"
    style="width: 100%"
    :placeholder="placeholder"
    type="datetimerange"
    format="yyyy-MM-dd HH:mm:ss"
    value-format="yyyy-MM-dd HH:mm:ss"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  name: 'SnCheckbox',
  components: {},
  props: {
    value: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '请选择'
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

<style scoped></style>
