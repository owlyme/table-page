export const checkNone = (context, message) => (rule, value, callback) => {
  if (!value && value !== 0) {
    return callback(new Error(message))
  } else {
    callback()
  }
}

export const checkPhone = (context, message) => (rule, value, callback) => {
  if (!value) {
    return callback(new Error(message))
  } else if (value.length !== 11 || /[^\d]/.test(value)) {
    return callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

export const checkNumber = (context, message) => (rule, value, callback) => {
  if (typeof value === 'number') {
    callback()
  } else if (!value || !value.length || !Number(value)) {
    return callback(new Error(message || '请输入正确的数字'))
  } else {
    callback()
  }
}

