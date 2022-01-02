/**
 * 更多的数据类型
 * @flow
 */


const a: 'foo' = 'foo'

const type: 'success'|'warnning'|'danger' = 'danger'

const b: string |number = 'caijiasheng'

// 把数据类型声明为别名
type StringOrNumber = string | number
const c: StringOrNumber = 'jiasheng'//100

// ----------------
//maybe的数据类型 存在多种可能性
const gender: ?number = undefined
const gender2: number| null | void = undefined