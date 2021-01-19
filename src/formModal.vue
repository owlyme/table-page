<template>
  <!-- 编辑弹框 -->
  <el-dialog :title="title" :visible.sync="showDialog" :width="width">
    <sn-dynamics-form
      v-if="type === 'form'"
      ref="formData"
      :conditions="editorConditions"
      :show-btn="false"
    />
    <snDynamicsText v-else :conditions="editorConditions" :show-btn="false" />
    <div v-if="type === 'form'" slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import snDynamicsForm from './dynamicsForm.vue'
import snDynamicsText from './dynamicsText.vue'
export default {
  name: 'FormModal',
  components: {
    snDynamicsForm,
    snDynamicsText
  },
  props: {
    type: {
      type: String,
      default: 'form'
    },
    width: {
      type: String,
      default: '480px'
    },
    title: {
      type: String,
      default: '编辑'
    },
    value: {
      type: Boolean,
      default: true
    },
    editorConditions: {
      type: Array,
      default: () => [
        {
          label: '名称',
          key: 'name',
          type: 'input'
        }
      ]
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
  watch: {
    showDialog(nv) {
      this.$emit('input', nv)
    },
    value(nv) {
      this.showDialog = nv
    }
  },
  created() {},
  mounted() {},
  methods: {
    cancel() {
      this.showDialog = false
      if (this.onCancel) {
        this.onCancel()
      }
      this.$emit('on-cancel')
      this.$refs.formData.resetForm()
    },
    async submit() {
      const data = await this.$refs.formData.submitForm()
      this.$emit('on-submit', data)
      if (this.onSubmit && data) {
        this.showDialog = false
        this.onSubmit(data)
      }
    }
  }
}
</script>

<style scoped ></style>
