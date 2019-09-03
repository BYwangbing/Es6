function log(x, y) {
    // if (typeof y === 'undefined') {
    //     y = 'World';
    // }
    y = y || 'World';
    console.log(x, y);
}
log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello World
console.log();

// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
function log3(x, y = 'World') {
    console.log(x, y);
}

log3('Hello'); // Hello World
log3('Hello', 'China'); // Hello China
log3('Hello', ''); // Hello
console.log();

// 参数变量是默认声明的，所以不能用let或const再次声明

// 使用参数默认值时，函数不能有同名参数
// 不报错
function foo(x, x, y) {
    // ...
}

// // 报错
// function foo2(x, x, y = 1) {
//     // ...
// }


// 参数默认值不是传值的，而是每次都重新计算默认值表达式的值
let x = 99;
function foo3(p = x + 1) {
    console.log(p);
}

foo(); // 100
foo(1);

