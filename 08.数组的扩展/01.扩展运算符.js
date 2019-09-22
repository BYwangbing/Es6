/**
 * @Description:
 * @author BY
 * @date 2019/9/10-18:03
 */
console.log(...[1, 2, 3]);      // 1 2 3

console.log(1, ...[2, 3, 4], 5);    // 1 2 3 4 5
console.log();
// [...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

// 该运算符主要用于函数调用
function push(array, ...items) {
    array.push(...items);
}
function add(x, y) {
    return x + y;
}
const numbers = [4, 38];
console.log(...numbers); // 4 38
console.log(add(...numbers)); // 42

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错

// 替代函数的 apply 方法
// 扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数
// ES5 的写法
function _f(x, y, z) {
    // ...
}
var _args = [0, 1, 2];
_f.apply(null, _args);

// ES6的写法
function f(x, y, z) {
    // ...
}
let args = [0, 1, 2];
f(...args);

// ES5 的写法
Math.max.apply(null, [14, 3, 77]);

// ES6 的写法
Math.max(...[14, 3, 77]);

// 等同于
Math.max(14, 3, 77);

// 通过push函数，将一个数组添加到另一个数组的尾部

// ES5的 写法
var _arr1 = [0, 1, 2];
var _arr2 = [3, 4, 5];
Array.prototype.push.apply(_arr1, _arr2);

// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);

// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);

// 扩展运算符的应用
// （1）复制数组
// const a1 = [1, 2];
// // 写法一
// const a3 = [...a1];
// // 写法二
// const [...a3] = a1;
// （2）合并数组
const arr3 = ['a', 'b'];
const arr4 = ['c'];
const arr5 = ['d', 'e'];

// ES5 的合并数组
arr3.concat(arr4, arr5);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
console.log([...arr3, ...arr4, ...arr5]);
// [ 'a', 'b', 'c', 'd', 'e' ]
console.log();

const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

console.log(a3[0] === a1[0]); // true
console.log(a4[0] === a1[0]); // true
console.log();

// （3）与解构赋值结合       用于生成数组
const [first_1, ...rest_1] = [1, 2, 3, 4, 5];
console.log(first_1); // 1
console.log(rest_1);  // [2, 3, 4, 5]

const [first_2, ...rest_2] = [];
console.log(first_2); // undefined
console.log(rest_2);  // []

const [first, ...rest] = ["foo"];
console.log(first);  // "foo"
console.log(rest);   // []
console.log();
// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报

// （4）字符串   扩展运算符还可以将字符串转为真正的数组
console.log([...'hello']);