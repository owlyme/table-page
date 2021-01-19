<template>
  <el-select
    class="radio"
    :value="value"
    :filterable="filterable"
    :disabled="disabled"
    @input="onChange"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'SnSelect',
  components: {},
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    filterable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="less"></style>
