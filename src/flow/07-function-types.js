/**
 * @flow
 * 函数类型
 */

function foo(callback:(string,number) => void){
    callback('string',100)
}


foo(function(str,n){
    console.log(str + n)
    //str => sting
    // n=>number 
})