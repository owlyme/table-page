import dayjs from 'dayjs'

function isValidateCondition(con) {
  if (!con.label || !con.key) {
    console.error('筛选条件的每一项都要有 label 和 key 字段')
  }
}

function valueFormat(value, type) {
  switch (type) {
    case 'checkbox':
      return value || []
    case 'date':
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
    default:
      return value
  }
}
export const formEleMap = {
  input: 'el-input',
  select: 'sn-select',
  date: 'el-date-picker',
  textarea: 'sn-textarea',
  radio: 'sn-radio',
  checkbox: 'sn-checkbox',
  timerange: 'sn-time-range'
}

export const createEleTag = type => (formEleMap[type] || 'el-input')

export function createConditionForm(arr) {
  const form = {};
  (arr || []).reduce((acc, item) => {
    isValidateCondition(item)
    acc[item.key] = valueFormat(item.value, item.type)
    return acc
  }, form)
  return form
}

export function createFormData(arr, data) {
  return (arr || []).reduce((acc, item) => {
    isValidateCondition(item)
    const { label, key, type, ...other } = item
    acc.push({
      ...other,
      label: label || key,
      key,
      value: valueFormat(data[key]),
      type: type
    })
    return acc
  }, [])
}
