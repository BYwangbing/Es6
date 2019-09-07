// length属性 含义: 该函数预期传入的参数个数

// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
// 即指定了默认值后，length属性将失真
console.log((function (a) {}).length); // 1
console.log((function (a = 5) {}).length); // 0
console.log((function (a, b, c = 5) {}).length); // 2

// length属性的含义是，该函数预期传入的参数个数
// 某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了

// 同理，后文的 rest 参数也不会计入length属性

console.log((function (...args) {}).length); // 0
console.log();

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数
console.log((function (a = 0, b, c) {}).length); // 0
console.log((function (a, b = 1, c) {
}).length); // 1
console.log();

// 作用域
var x = 1;

function f(x, y = x) {
    console.log(y);
}
f(3);

// 例二
let a = 1;

function f1(b = a) {
    let a = 2;
    console.log(b);
}
// 函数调用时，函数体内部的局部变量a影响不到默认值变量a
f1(); // 1

// 如果此时，全局变量x不存在，就会报错

function f2(y = c) {
    let c = 2;
    console.log(y);
}
// f2(); // ReferenceError: c is not defined
console.log();

let foo = 'outer';

function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}

bar(); // outer
// 如果写成下面这样，就会报错
function bar1(func = () => foo1) {
    let foo1 = 'inner';
    console.log(func());
}

// bar1(); // ReferenceError: foo1 is not defined

var _x = 1;
function _foo(_x, y = function() { _x = 2; }) {
    // var _x = 3;
    _x = 3;
    y();
    console.log(_x);
}

_foo(); // 2
console.log(_x); // 1
console.log();

// 应用
// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo2(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}


console.log(foo2('BY&K'));
// foo();  // Error: Missing parameter