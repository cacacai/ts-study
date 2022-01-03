/**
 * 类型断言
 */

export {}
const nums = [1,2,3,4,5,6]

const res = nums.find(i=>i>0)//数据类型为number或者 undefind
//const square = res * res// 数据类型无法确定导致无法相乘

/**
 * 断言两种方法
 * as number
 * <number>
 */
const num1 = res as number//断言,明确res为number

const num2 = <number>res//JSX下不能使用 