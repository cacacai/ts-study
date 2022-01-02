/**
 * Mixed Any
 * @flow
 */
//mixed string |number | boolean ...可以接收任何的数据类型
function passMixed (value: mixed){
    if(typeof value === 'string'){
        value.substring(1)
    }
    //value.substring(1)
    console.log(value)
}

passMixed(123)
passMixed('caijiasheng')

//===========================
//也可以接收任何的数据类型
function passAny(value: any){
    //
    console.log(value)
    value.substring(1)
}

/**
 * any修饰的数据为弱类型数据,所以在开发 编译过程中都不会进行类型检查,但是在运行期该报错还是会正常报错
 * 
 * 而我们引入flow工具其实就是为了解决js无法解析弱类型的数据
 */
