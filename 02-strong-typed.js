//1、错误跟高暴露；通过静态分析，或者编译阶段来分析异常代码
//2、代码更加智能，编码更加准确；可以通过智能提示来提高代码的准确性

function render (element){
    element.className = 'container'
    element.innertHtml = 'hell0 world' //无法通过编译器检测当前的属性正确性
}
//3、 重构更加稳定，可以确定性的修改属性名称，引用关系

const util = {
    aaa: () => {// 如果aaa进行变更，无法确定其引用的地方
        console.log('util func')
    }
}

//4、减少不必要的数据类型判断

function sum (a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError('argments must a number')
    }
    return a+b
}