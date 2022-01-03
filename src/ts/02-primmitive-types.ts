/**
 * 原始类型
 * 数据类型
 */
const a = 'aaa';
const b = Infinity; //NaN 100

const c = true; //false

const d = null;
const e = undefined; //es6

const f = Symbol();

const arr = Array();


console.log

/**
 * 标准库就算内置对象所对应的声明
 * 按需引入,否则找不到出现异常
 * 
 * 
 * 通过配置文件tsconfig.json中进行配置
 * 参数为lib\target
 * "lib": ["ES2015","DOM"],  
 * 如果开启了lib参数,同时需要引入DOM,包含了js通用的工具方法在
 */