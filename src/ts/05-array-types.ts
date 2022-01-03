/**
 * 数组数据类型
 */

const arr1 : Array<number> = [1,23,4]
const arr2 : number[] = [1,234,3]

//=============

function sum (...args: number[]){
    return args.reduce((pre,current)=> pre +current,0)
}

sum(1,2,34,4,5)