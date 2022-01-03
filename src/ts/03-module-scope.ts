/**
 * 作用域问题
 * 不同文件中,存在相同的变量名,会存在异常报错
 * 默认是定义在全局环境上的
 * 所以解决问题就是,创建不同作用域进行隔离
 */

(function(){
    const a = 123
})

const a = 123

//作为一个模块的声明
export {}