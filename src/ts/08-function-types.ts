/**
 * 函数类型
 */
export {}

//指定数据类型,?可选参数类型 
function fun(a: number,b?: number):string{
    return 'caijiasheng'
}

fun(123,345)

//--------
/**
 * 函数表达式
 */

const func2 : (a: number, b: number) => string = function (a:number,b:number):string {
    return 'caijiasheng'
}