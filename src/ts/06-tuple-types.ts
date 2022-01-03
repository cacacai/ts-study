/**
 * 元组数据类型
 * 固定的数据类型,固定长度
 */
export {}
const tuple : [number,string] = [12,'caijiasheng']
//const age =tuple[0]
//const name =tuple[1]

//解构方法去提取数据类型
const [age,name] =tuple
console.log(age +name)

//-------------
//通过es2017 来构造元组
Object.entries({
    foo: 123,
    bar: 456
})