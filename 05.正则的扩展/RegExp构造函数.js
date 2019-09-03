// 1. RegExp 构造函数

// ES5 中，RegExp构造函数的参数有两种情况
var regex = new RegExp('xyz', 'i');
var regex2 = RegExp(/xyz/);

// ES6
console.log(new RegExp(/abc/ig, 'i').flags);
console.log();
// 2. 字符串的正则方法
// 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()

// 3. u 修饰符  会正确处理四个字节的 UTF-16 编码
console.log(/^\uD83D/u.test('\uD83D\uDC2A'));// false
console.log(/^\uD83D/.test('\uD83D\uDC2A')); // true

// （1）量词    用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符
console.log(/a{2}/.test('aa')); // true
console.log(/a{2}/u.test('aa'));// true
console.log(/𠮷{2}/.test('𠮷𠮷')); // false
console.log(/𠮷{2}/u.test('𠮷𠮷'));// true
console.log();

// (4）预定义模式

// 4. RegExp.prototype.unicode 属性      表示是否设置了u修饰符
const _r1 = /hello/;
const _r2 = /hello/u;

console.log(_r1.unicode); // false
console.log(_r2.unicode); // true
console.log();

// 5. y修饰符  g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s)); // ["aaa"]
console.log(r2.exec(s)); // ["aaa"]

console.log(r1.exec(s)); // ["aa"]
console.log(r2.exec(s)); // null

console.log();

var _s = 'aaa_aa_a';
var r = /a+_/y;

console.log(r.exec(_s)); // ["aaa_"]
console.log(r.exec(_s)); // ["aa_"]

console.log();

// 7.RegExp.prototype.flags 属性  flags属性，会返回正则表达式的修饰符
// ES5 的 source 属性  返回正则表达式的正文
console.log(/abc/ig.source);// "abc"

// ES6 的 flags 属性   返回正则表达式的修饰符
console.log(/abc/ig.flags);// 'gi'