<template>
  <div class="table-header flex-middle">
    <div style="font-size: 16px; font-weight: 600">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  components: {},
  props: {
    title: {
      type: String,
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

<style scoped lang="scss">
.table-header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>
