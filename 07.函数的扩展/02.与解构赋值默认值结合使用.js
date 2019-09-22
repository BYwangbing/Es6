function foo({x, y = 5}) {
    console.log(x, y);
}
// 只使用了对象的解构赋值默认值，没有使用函数参数的默认值

foo({}); // undefined 5
foo({x: 1}); // 1 5
foo({x: 1, y: 2}); // 1 2
// foo(); // TypeError: Cannot destructure property `x` of 'undefined' or 'null'.

// 只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成
function foo2({x, y = 5} = {}) {
    console.log(x, y);
}

foo2(); // undefined 5

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}

fetch('http://example.com', {});

function fetch2(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}
fetch2('http://example.com');

console.log();

// 写法一
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}); // [3, 8]
m2({x: 3, y: 8}); // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}); // [3, 0]
m2({x: 3}); // [3, undefined]

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

m1({z: 3}); // [0, 0]
m2({z: 3}); // [undefined, undefined]

// 参数默认值的位置

// 如果非尾部的参数设置默认值，实际上这个参数是没法省略的
function f(x = 1, y) {
    return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined])
// f(, 1); // 报错
f(undefined, 1); // [1, 1]

// 例二
function f2(x, y = 5, z) {
    return [x, y, z];
}

f2(); // [undefined, 5, undefined]
f2(1); // [1, 5, undefined]
// f2(1, ,2); // 报错
console.log(f2(1, undefined, 2)); // [1, 5, 2]

// 上面的代码中有默认值的参数都不是尾参数
// 这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果