<template>
  <div class="table-index">
    <sn-dynamics-form
      inline
      label-width="80px"
      :conditions="conditions"
      @on-submit="onSubmit"
      @on-clear="onClear"
      @on-form-change="onFormChange"
    />

    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <template v-for="({ label, key, width, render, type }, index) in tableHeader">
        <el-table-column
          v-if="type === 'selection'"
          :key="index"
          type="selection"
          width="55"
        />

        <el-table-column v-else :key="index" :label="label" :min-width="width">
          <template slot-scope="scope">
            <template v-if="!render">
              {{ scope.row[key] }}
            </template>
            <template v-else>
              <render :render="render" :data="{ index: scope.$index, row: scope.row }" />
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div style="margin-top: 20px">
      <el-pagination
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { createFormData } from './tools'
import snDynamicsForm from './dynamicsForm.vue'
import render from './render.js'
export default {
  name: 'TableIndex',
  components: {
    snDynamicsForm,
    render
  },
  props: {
    conditions: {
      type: Array,
      default: () => []
    },
    tableHeader: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    selection: {
      type: Boolean,
      default: true
    },
    totalPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      editorFormConditions: [],
      multipleSelection: [],
      currentPage: 1,
      // totalPage: 1000,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100, 300, 500]
    }
  },

  watch: {},
  created() {
    const { currentPage, pageSize } = this
    this.tableParam = {
      currentPage,
      pageSize
    }
  },

  mounted() {},
  methods: {
    // 筛选参数
    onSubmit(conditons) {
      console.log(conditons)
      this.onGetTableData(conditons)
    },
    onClear(conditons) {
      console.log(conditons)
      this.onGetTableData(conditons)
    },
    handleEdit(index, row) {
      this.editorFormConditions = createFormData(this.editorConditions, row)
      this.showDialog = true
    },
    handleDelete(index, row) {
      console.log(index, row)
    },

    // 选择列表
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },

    // 分页
    handleSizeChange(e) {
      const { currentPage } = this
      const pageSize = (this.pageSize = e)
      this.onPageChange(currentPage, pageSize)
    },
    handleCurrentChange(e) {
      const { currentPage, pageSize } = this
      this.onPageChange(currentPage, pageSize)
    },
    onPageChange(currentPage, pageSize) {
      this.$emit('on-page-change', { currentPage, pageSize })
      this.onGetTableData({ currentPage, pageSize })
    },
    // 调用接口
    onGetTableData(arg = {}) {
      const param = (this.tableParam = { ...(this.tableParam || {}), ...arg })
      console.log(param)
      this.$emit('on-table-data', param)
    },
    //
    onFormChange(param) {
      this.$emit('on-condition-change', param)
    }
  }
}
</script>

<style scoped >
.table-index {
}
</style>
