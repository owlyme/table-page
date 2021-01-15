<template>
  <el-checkbox-group
    class="checkbox"
    :value="value"
    @input="(val) => $emit('input', val)"
  >
    <el-checkbox v-for="item in options" :key="item.value" :label="item.value">{{
      item.label
    }}</el-checkbox>
  </el-checkbox-group>
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
    options: {
      type: Array,
      default: () => []
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

<style scoped lang="less"></style>
