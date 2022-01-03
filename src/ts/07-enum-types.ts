/**
 * 枚举数据类型
 * 
 */
export {}
const post ={
    title: 'cai',
    status: 1//数字类型无法确定其内容意义
}

//需要使用枚举类型数据来提供可读性更强的意义


//定义枚举数据(对象)
// const PostStatus ={
//     Draft: 0,
//     Unpublish: 1,
//     Publish:2
// }

//可以指定为数字或者字符串类型
// enum PostStatus {
//     Draft= 0,
//     Unpublish= 1,
//     Publish=2
// }


//如果不指定值,默认从0开始累加,或者从指定值开始累加
const enum PostStatus {
    Draft,
    Unpublish,
    Publish
}

const post1 ={
    title: 'cai',
    status: PostStatus.Publish//替换对应的1/2/3
}


// enum为ts的数据类型,编译之后会注定移除对应的特性,生成原始的js代码