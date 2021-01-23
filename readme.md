### 个人用
### 为了少些代码
### 为了更搞得效率
### 为了可配置
### 使用依赖（请手动安装）
1. yarn add element-ui
2. yarn add dayjs

### 使用案例路径(/template)
```
├── pageA
│    ├── config.js // 微信小程序自定义组件
│    ├── *.vue        // 请求域名配置
```
### config.js
```javaScript
import {
  checkNone,
  checkPhone
} from '@/components/sn/validateFormFns.js'


export function filterConditions() {
  return [{
    label: '平台类型',
    key: 'platformType',
    type: 'select', // select radio checkbox input date
    value: -1,
    options: [{
        label: '请选择',
        value: -1
      },
      ...
    ]
  }]
}

export function tableHeader(self) {
  return [
    {
      type: "selection"
    },
    {
      label: '平台类型',
      key: 'platformType',
      render(h, { row }) {
        const { platformType } = row
        return ( < span > { platformTypeMap[platformType] } < /span>)
        }
    },
    {
      label: '操作',
      key: 'action',
      width: '140',
      render: (h, { index, row }) => {
        const { userStatus } = row
        return (<div>
          <el-button size = 'mini'
          onClick = {
            () => self.editDetail(row)
          } >
          编辑 </el-button>
          </div>
        )
      }
    }
  ]
}

export function formItems(self) {
  return [{
        label: '平台类型',
        key: 'platformType',
        type: 'select', // select radio checkbox input date
        value: 0,
        render(h, { value }) {
          return ( < span > { platformTypeMap[value] } < /span>)
            },
            options: [
              ...platformTypeList
            ],
            rules: [
              { required: true, validator: checkNone(null, '平台类型不能为空') }
            ]
        }
  ]
}
```
### vue file
```vue
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

```

