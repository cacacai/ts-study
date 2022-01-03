/**
 * 接口
 * 只是ts为了约束数据类型,在实际编译之后不存在,没有任何意义
 */

export {}
//通过接口指定对象中的成员变量
interface Post {
    title:string
    content:string
}

//指定数据类型,
function printPost(post:Post){
    console.log(post.title)
    console.log(post.content)
}

printPost({
    title:'caijiasheng',
    content: 'hello world'
})