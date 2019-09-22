/**
 * @Description:
 * @author BY
 * @date 2019/9/10-15:35
 */

// 某个函数的最后一步是调用另一个函数
function f(x){
    return g(x);
}

// 情况一
function f1(x){
    let y = g(x);
    return y;
}

// 情况二
function f2(x){
    return g(x) + 1;
}

// 情况三
function f3(x){
    g(x);
}

//情况三即
function f4(x){
    g(x);
    return undefined;
}

// 尾调用不一定出现在函数尾部，只要是最后一步操作即可
function f5(x) {
    if (x > 0) {
        return m(x)
    }
    return n(x);
}

// 尾递归  函数调用自身，称为递归。如果尾调用自身，就称为尾递归

function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n-1)
}

console.log('递归: ', factorial(5));

// 计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)

// 如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 
function _factorial(n, total) {
    if (n === 1) return total;
    return _factorial(n - 1, n * total)
}

console.log('尾递归: ', _factorial(5, 1));
console.log();

// 非尾递归的 Fibonacci 数列实现
/**
 * @return {number}
 */
function Fibonacci (n) {
    if ( n <= 1 ) {
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(10)); // 89
// Fibonacci(100); // 超时
// Fibonacci(500); // 超时

// 尾递归优化过的 Fibonacci 数列实现
/**
 * @return {number}
 */
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {
        return ac2
    }

    return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(100));// 573147844013817200000
console.log(Fibonacci2(1000)); // 7.0330367711422765e+208
console.log();

// 递归函数的改写
// 方法一是在尾递归函数之外，再提供一个正常形式的函数
function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

function factorial_1(n) {
    return tailFactorial(n, 1);
}

console.log(factorial_1(5));

function factorial_f(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial_f(5); // 120
console.log();

// ES6 的尾调用优化只在严格模式下开启，正常模式是无效的

// 尾递归优化只在严格模式下生效

// 采用“循环”换掉“递归”     蹦床函数（trampoline）可以将递归执行转为循环执行
// 下面是一个正常的递归函数

// function sum(x, y) {
//     if (y > 0) {
//         return sum(x + 1, y - 1);
//     } else {
//         return x;
//     }
// }
//
// sum(1, 100000);
// Uncaught RangeError: Maximum call stack size exceeded(…)

// 蹦床函数（trampoline）可以将递归执行转为循环执行
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

// 7. 函数参数的尾逗号
// 新的语法允许定义和调用时，尾部直接有一个逗号。


// 8. Function.prototype.toString()

// toString()方法返回函数代码本身，以前会省略注释和空格
// 修改后的toString()方法，明确要求返回一模一样的原始代码。
function /* foo comment */ foo () {}
console.log(foo.toString());// function foo() {}

// 9. catch 命令的参数省略
try {
    // ...
} catch (err) {
    // 处理错误
}

try {
    // ...
} catch {
    // ...
}