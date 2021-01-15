<template>
  <div v-if="conditionForm" class="dynamicsForm">
    <el-form
      v-show="conditions.length"
      ref="formName"
      :model="conditionForm"
      :label-width="labelWidth"
      :inline="inline"
      size="mini"
    >
      <el-form-item
        v-for="(
          {
            label,
            key,
            type,
            options,
            placeholder,
            prepend,
            append,
            rules = [],
            ...other
          },
          index
        ) in conditions"
        :key="index"
        :label="label"
        :label-width="other.labelWidth"
        :rules="rules"
        :prop="key"
      >
        <div class="flex-middle">
          <div class="text-oneline">{{ prepend || "" }}</div>
          <component
            :is="createEleTag(type)"
            v-model="conditionForm[key]"
            style="width: 100%"
            :placeholder="placeholder || (type == 'input' ? '请输入' : '请选择')"
            :options="options"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
          <div class="text-oneline">{{ append || "" }}</div>
        </div>
      </el-form-item>

      <el-form-item v-show="showBtn">
        <el-button type="primary" size="mini" @click="submitForm">搜索</el-button>
        <el-button size="mini" @click="onClear">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createConditionForm, createEleTag } from './tools'
import snTextarea from './textarea'
import snRadio from './radio'
import snCheckbox from './checkbox'
import snSelect from './select'
export default {
  name: 'DynamicsForm',
  components: {
    snTextarea,
    snRadio,
    snCheckbox,
    snSelect
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    showBtn: {
      type: Boolean,
      default: true
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
  watch: {
    conditions() {
      // this.createConditionForm();
    }
  },
  created() {
    this.createConditionForm()
  },
  mounted() {
    // this.onSubmit();
    this.initFormSubmit()
  },
  methods: {
    createEleTag(type) {
      return createEleTag(type)
    },
    createConditionForm() {
      const conditions = this.conditions
      this.conditionForm = createConditionForm(conditions)
    },
    onSubmit() {},
    onClear() {
      this.createConditionForm()
      this.$emit('on-clear', { ...this.conditionForm })
      this.resetForm()
    },
    initFormSubmit() {
      const data = { ...this.conditionForm }
      this.$emit('on-submit', data)
    },
    async submitForm() {
      const valid = await this.$refs['formName'].validate()
      if (valid) {
        const data = { ...this.conditionForm }
        this.$emit('on-submit', data)
        return data
      } else {
        return false
      }
    },
    resetForm() {
      this.$refs['formName'].resetFields()
    }
  }
}
</script>

<style scoped lang="less"></style>