//@flow
//flow语言类型检查器，用来解决js中弱类型语言定义不清晰的问题
//类型注解

function sumTest (a: number,b: number){
    return a +b
}

console.log(sumTest(1,2))
console.log(sumTest(1,'2'))


//flow使用方法
/**
 * 安装flow，为npm模块
 * 
 * 先初始化yarn项目，生成package.json文件  yarn init --yes
 * 添加模块 yarn add flow-bin --dev
 * 初始化使用生成配置文件 yarn flow init
 * 使用模块添加注释 //@flow 这样才会进行检查文件
 * 检查 yarn flow 会启动后台服务，对语法进行检查
 * 结束服务 yarn flow stop
 */


/**
 * 可能存在的问题
 * VScode中js语法报类型注释只能在TypeScript文件中使用
 * 找setting.json文件
 * Crtl+shift+P，输入setting.json
 * "javascript.validate.enable": false
 */