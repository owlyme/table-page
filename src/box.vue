<template>
  <div class="box">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.box {
  padding: 10px;
}
</style>
