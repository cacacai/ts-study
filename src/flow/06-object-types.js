/**
 * @flow
 * 对象类型
 */

import { console } from "inspector";
//指定对象中的参数和数据类型
const obj1: {foo:string, bar:number} ={foo:'string',bar:123,other:'cai'}

// ?为可选项参数使用
const obj2: {foo?:string, bar:number} ={bar:123}


const obj3 = {}
obj3.key1 = 'cai'

//限制对象中的key和value都为string类型数据
const obj4: {[string]:string} = {}
obj4.key1 = '123'