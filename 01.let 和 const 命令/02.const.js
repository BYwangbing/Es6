/**

 * @author BY

 * @date 2019-08-06 08:12

 */
console.log('-----const声明一个只读的常量。一旦声明，常量的值就不能改变-----const一旦声明变量,就必须立即初始化，不能留到以后赋值-----');

// if (true) {
//     const MAX = 5;
// }
//
// MAX // Uncaught ReferenceError: MAX is not defined
console.log('-----const的作用域只在声明所在的块级作用域内有效-----');
console.log('----const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用----');

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log(foo.prop); // 123
// 将 foo 指向另一个对象，就会报错
// foo = {}; // TypeError: "foo" is read-only

const a = [];
a.push('Hello'); // 可执行
console.log(a.length);    // 可执行

const fo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
fo.prop = 123;