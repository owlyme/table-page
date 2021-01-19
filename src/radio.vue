<template>
  <el-radio-group class="radio" :value="value" @input="onChange">
    <el-radio v-for="item in options" :key="item.value" :label="item.value">{{
      item.label
    }}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'SnRadio',
  components: {},
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
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
  methods: {
    onChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped ></style>
