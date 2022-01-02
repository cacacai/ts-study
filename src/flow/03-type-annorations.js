/**
 * 类型注解
 * @flow
 */

 function square (n: number){//注解传入参数
    return n*n
}

let num:number = 100//注解变量类型
// num = '23333'

/**
 * 如果没有返回值，默认返回undefined 也会存在异常 
 * 
 * @returns number
 */
function foo ():number {//注解函数的返回参数
    return 12
    //return '12'
}
//所以如果没有指定返回数据类型，需要指定返回void

function foo2 ():void {
}