// 1. 二进制和八进制表示法
// ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示
console.log(0b111110111 === 503); // true
console.log(0o767 === 503); // true-++++
// 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法
console.log(Number('0b111'));
console.log(Number('0o10'));
console.log();

// 2. Number.isFinite(), Number.isNaN()
// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity  如果参数类型不是数值，Number.isFinite一律返回false
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
// Number.isNaN()用来检查一个值是否为NaN  如果参数类型不是NaN，Number.isNaN一律返回false
console.log(Number.isNaN(NaN)); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9 / NaN); // true
Number.isNaN('true' / 0);// true
Number.isNaN('true' / 'true'); // true

console.log();
/*
    传统的全局方法isFinite()和isNaN()的区别在于
    传统方法先调用Number()将非数值的值转为数值，再进行判断
    而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false
* */
console.log(isFinite(25)); // true
console.log(isFinite("25")); // true
console.log(Number.isFinite(25));// true
console.log(Number.isFinite("25"));// false
console.log();

console.log(isNaN(NaN)); // true
console.log(isNaN("NaN")); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(1)); // false
console.log();

// 3. Number.parseInt(), Number.parseFloat()    ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变
// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45

Number.parseInt === parseInt; // true
Number.parseFloat === parseFloat; // true
console.log();

// 4. Number.isInteger() 用来判断一个数值是否为整数 如果参数不是数值，Number.isInteger返回false
// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值

// 5. Number.EPSILON    极小的常量Number.EPSILON     它表示 1 与大于 1 的最小浮点数之间的差
console.log(Number.EPSILON);
console.log(Number.EPSILON === Math.pow(2, -52));
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log();

// Number.EPSILON的实质是一个可以接受的最小误差范围
function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}

0.1 + 0.2 === 0.3; // false
withinErrorMargin(0.1 + 0.2, 0.3); // true

1.1 + 1.3 === 2.4; // false
withinErrorMargin(1.1 + 1.3, 2.4); // true

// 6. 安全整数和 Number.isSafeInteger()

// avaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
Math.pow(2, 53); // 9007199254740992

9007199254740992;  // 9007199254740992
9007199254740993;  // 9007199254740992

Math.pow(2, 53) === Math.pow(2, 53) + 1; // true

// ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1;
// true
Number.MAX_SAFE_INTEGER === 9007199254740991;
// true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER;
// true
Number.MIN_SAFE_INTEGER === -9007199254740991;
// true

// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
Number.isSafeInteger = function (n) {
    return (typeof n === 'number' &&
        Math.round(n) === n &&
        Number.MIN_SAFE_INTEGER <= n &&
        n <= Number.MAX_SAFE_INTEGER);
};

// 7. Math 对象的扩展

// Math.trunc() 用于去除一个数的小数部分，返回整数部分
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值
// 对于空值和无法截取整数的值，返回NaN

// Math.sign() 用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
// 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN

// Math.cbrt() 方法用于计算一个数的立方根
console.log(Math.cbrt(8));

// Math.hypot()     返回所有参数的平方和的平方根
console.log(Math.hypot(3, 4));

// 对数方法
// Math.expm1() 返回 e^x - 1，即Math.exp(x) - 1
// Math.log1p() 返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
console.log(Math.log1p(9));
// Math.log10() 返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
console.log(Math.log10(100));
// Math.log2() 返回以 2 为底的x的对数。如果x小于 0，则返回 NaN
console.log(Math.log2(8));
console.log();
// 6 个双曲函数方法

// 指数运算符    **  多个指数运算符连用时，是从最右边开始计算的
// 相当于 2 ** (3 ** 2)
console.log(2 ** 3 ** 2);   // 512
// 赋值运算符（**=）
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;

