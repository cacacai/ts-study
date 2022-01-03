//object 类型

export{}

// const foo: object = 123 object 类型不能为普通的数据类型,可以function [] {} 
const foo: object = function(){} //[] {} 
const obj: {foo:number,bar:string} = {foo:123,bar:'123'}
