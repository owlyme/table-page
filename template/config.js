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