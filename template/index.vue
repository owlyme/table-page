<template>
  <div class="repository">
    <sn-box>
      <sn-table-header title="表头"></sn-table-header>

      <sn-table
        :conditions="conditions"
        :table-data="tableData"
        :table-header="tableHeader"
        :total-page="totalPage"
        @on-table-data="getTableData"
      />
    </sn-box>
  </div>
</template>

<script>
import { createFormData } from 's3n-table/tools'
import { filterConditions, tableHeader, formItems } from './config'

export default {
  name: 'Repository',
  data() {
    return {
      conditions: filterConditions(), // 搜索条件
      tableHeader: tableHeader(this), // 表头
      totalPage: 0, // 总条数
      tableData: [], // table 数据
    }
  },
  methods: {
    /**
     * { object } param 搜索条件
     */
    getTableData(param) {
      console.log(param)
    }
  },
  
}
</script>

<style scoped ></style>
