//弱类型语言问题
//console.log("hello world");

// 1、弱类型语言无法在编写过程中发现语法问题，运行时才能发现问题
// const obj = {}
// //obj.foo()
// setTimeout(()=>{
//     obj.foo()
// },1000)
//========================

//2、 无法控制参数类型。不明确，导致功能改变 

function sum (a,b){
    return a +b;
}

console.log(sum(1,'123123'))


//========================
// 3、数据索引存在歧义
const ojb = {}

ojb[true] = 100
console.log(ojb['true'])


//君子约定有隐患，强制要求有保障