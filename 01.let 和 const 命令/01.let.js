// 1.let命令
{
    let x = 10;
    var y = 1;
                    //let声明的变量只在它所在的代码块有效
}
console.log(x);
// console.log(y);  // ReferenceError: y is not defined.
console.log('-----let声明的变量只在它所在的代码块有效-----');

var a = [];
for (var j = 0; j < 10; j++) {
    a[j] = function () {
        console.log(j);
    };
}
a[6](); // 10

var b = [];
for (let i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i);
    };
}
b[6](); // 6
console.log('--------------------------------------------------------');

for (var i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
console.log('-----函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域-----');

// 不存在变量提升

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;
console.log('-----let不存在变量提升-----');

// 暂时性死区

// var tmp = 123;
//
// if (true) {
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }
// console.log(tmp);
console.log('-----暂时性死区-----');
if (true) {
    // TDZ开始

    // tmp = 'abc'; // ReferenceError
    // console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}
console.log('-----let变量一定要在声明之后使用，否则就报错-----');
// function bar1(x = y, y = 2) {
//     return [x, y];
// }
//
// bar1(); // 报错
console.log('--------------------------------------------------------');
// 不报错
var x = x;
console.log(x);

// 报错
// let y = y;
// console.log(y);
// ReferenceError: x is not defined
console.log('-----let、const语句不出现变量提升-----');

//

// 报错
// function func() {
//     let a = 10;
//     let a = 1;
//     console.log(a)
// }
// func();

// function func(arg) {
//     let arg;
// }
// func();// 报错

function func(arg) {
    {
        let arg;
    }
}
func();// 不报错
console.log('-----不允许重复声明，不能在函数内部重新声明参数-----');

var date = new Date();
function f() {
    console.log(date);
    if (false) {
        var date = 'hello world';
    }
}
f(); // undefined
console.log('-----内层变量可能会覆盖外层变量-----变量提升，导致内层的date变量覆盖了外层的date变量-----');

var s = 'hello';

for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

console.log('-----用来计数的循环变量泄露为全局变量-----');

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();//外层代码块不受内层代码块的影响,如果两次都使用var定义变量n，最后输出的值才是 10
console.log('-----let外层代码块不受内层代码块的影响-----');

// function fun() { console.log('I am outside!'); }
//
// (function () {
//     if (false) {
//         // 重复声明一次函数f
//         function fun() { console.log('I am inside!'); }
//     }
//     fun();
// }());
console.log('-----块级作用域内声明的函数类似于let-----');

/*
    允许在块级作用域内声明函数
    函数声明类似于var，即会提升到全局作用域或函数作用域的头部
    同时，函数声明还会提升到所在的块级作用域的头部
*/

// 浏览器的 ES6 环境
// function f2() { console.log('I am outside!'); }
// (function () {
//     var f2 = undefined;
//     if (false) {
//         function f2() { console.log('I am inside!'); }
//     }
//
//     f2();
// }());
console.log('-----写成函数表达式，而不是函数声明语句-----');

// // 第一种写法，报错
// if (true) let x = 1;
// console.log(x);

// 第二种写法，不报错
if (true) {
    let x = 1;
}
console.log('-----ES6 的块级作用域必须有大括号-----');

console.log('严格模式下，函数只能声明在当前作用域的顶层');