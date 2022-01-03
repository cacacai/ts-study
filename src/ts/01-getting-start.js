//可以完全按照js的语法使用
var hello = function (name) {
    console.log("hello ".concat(name));
};
hello('TypeScript');
/**
 * 初始化安装ts模块 yarn add  typescript
 * 在node_modules/.bin 文件夹下存在tsc命令工具
 * 编译转换 yarn tsc src/ts/01-getting-start.ts
 * 
 * 调整tsc为中文异常提示 yarn tsc --locale zh-CN
 *
 */ 
