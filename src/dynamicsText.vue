<template>
  <div v-if="conditionForm" class="dynamicsText">
    <el-form
      v-show="conditions.length"
      ref="form"
      :model="conditionForm"
      :label-width="labelWidth"
      :inline="inline"
      size="mini"
    >
      <el-form-item
        v-for="({ label, key, render, format, ...other }, index) in conditions"
        :key="index"
        :label="label"
        :label-width="other.labelWidth"
      >
        <sn-render
          v-if="render"
          :render="render"
          :data="{ value: conditionForm[key], formdata: conditionForm }"
        />
        <template v-else-if="format">
          {{ format(conditionForm[key]) }}
        </template>
        <template v-else>
          {{ conditionForm[key] }}
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createConditionForm } from './tools'

export default {
  name: 'DynamicsText',
  components: {},
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    conditions: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    }
  },
  data() {
    return {
      conditionForm: null
    }
  },
  watch: {},
  created() {
    this.createConditionForm()
  },
  mounted() {},
  methods: {
    createConditionForm() {
      const conditions = this.conditions
      this.conditionForm = createConditionForm(conditions)
    }
  }
}
</script>

<style scoped></style>
