//可以完全按照js的语法使用

const hello = (name:string,num: number) => {
    console.log(`hello ${name}`)
}

hello('TypeScript',12)



/**
 * 初始化安装ts模块 yarn add  typescript
 * 在node_modules/.bin 文件夹下存在tsc命令工具
 * 编译指定ts文件  yarn tsc src/ts/01-getting-start.ts
 * 
 * 
 * ts可以在开发过程中发现语法错误
 */

/**
 * tsc命令说明
 * 在root下执行 yarn tsc --init 来初始化一个tsc的配置文件
 * 在配置文件中设置编译过程的一些参数
 *  "target": "es2016",    编译使用的语法标准
 *  "module": "commonjs", 依赖模块生成文件名
 * "rootDir": "src",  指定源代码的文件目录
 *  "sourceMap": true,      为源代码文件创建映射记录 map文件
 * "outDir": "dist", 指定输出的文件目录指定
 *  "strict": true,  开启严格的检查模式,不允许有any的数据类型,需要明确字段数据类型
 * 
 * 
 * 然后编译整个项目  yarn tsc
 */