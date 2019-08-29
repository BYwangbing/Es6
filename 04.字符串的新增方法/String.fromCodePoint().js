// 1. String.fromCodePoint()
// 2. codePointAt()
// 3. String.raw()
// 4. 实例方法：normalize()
// 5. 实例方法：includes(), startsWith(), endsWith()
// 6. 实例方法：repeat()
// 7. 实例方法：padStart()，padEnd()      padStart()用于头部补全，padEnd()用于尾部补全
// 8. 实例方法：trimStart()，trimEnd()    行为与trim()一致
// 9. 实例方法：matchAll()

// 1. String.fromCodePoint()

// ES5 提供String.fromCharCode()方法
console.log(String.fromCharCode(0x20BB7));
// ES6 提供String.fromCodePoint()方法
console.log(String.fromCodePoint(0x20BB7));
// 如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');
console.log();
// fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上

// 2. codePointAt()
var s = "𠮷";
console.log(s.length); // 2
console.log(s.charAt(0)); // ''
console.log(s.charAt(1)); // ''
console.log(s.charCodeAt(0)); // 55362
console.log(s.charCodeAt(1)); // 57271
console.log('-----------------------------------------------------');
// charAt()方法无法读取整个字符，charCodeAt()方法只能分别返回前两个字节和后两个字节的值
console.log(s.codePointAt(0)); // 134071
console.log(s.codePointAt(1)); // 57271
console.log('-----------------------------------------------------');
// codePointAt()方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString()方法转换一下
let sa = '𠮷a';
console.log(sa.codePointAt(0).toString(16)); // "20bb7"
console.log(sa.codePointAt(2).toString(16)); // "61"
// codePointAt()方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是 1，但是必须向codePointAt()方法传入 2
console.log('-----------------------------------------------------');
// for...of循环
let sb = '𠮷a';
for (let ch of sb) {
    console.log(ch.codePointAt(0).toString(16));
}
console.log('-----------------------------------------------------');
// 使用扩展运算符（...）进行展开运算
let arr = [...'𠮷a'];
arr.forEach(ch => {
    console.log(ch.codePointAt(0).toString(16));
});
console.log('-----------------------------------------------------');
// codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("𠮷")); // true
console.log(is32Bit("a")); // false
console.log();

// 3. String.raw()
console.log(String.raw`Hi\u000A!`);
// 如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义
console.log(String.raw`Hi\\n` === "Hi\\\\n");
console.log(String.raw`Hi\\n`);
// String.raw()方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组
console.log(String.raw({raw: 'test'}, 0, 1, 2) === String.raw({raw: ['t', 'e', 's', 't']}, 0, 1, 2));

// 作为函数，String.raw()的代码实现基本如下
String.raw = function (strings, ...values) {
    let output = '';
    let index;
    for (index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }

    output += strings.raw[index];
    return output;
};
console.log();

// 4. 实例方法：normalize()

// 5. 实例方法：includes(), startsWith(), endsWith()

// JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中

/*

ES6 又提供了三种新方法。
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

* */
let str1 = 'Hello world!';

console.log(str1.startsWith('Hello')); // true
console.log(str1.endsWith('!')); // true
console.log(str1.includes('b')); // false
console.log('-----------------------------------------------------');
// 这三个方法都支持第二个参数，表示开始搜索的位置
let str2 = 'Hello world!';
console.log(str2.startsWith('world', 6)); // true
console.log(str2.endsWith('Hello', 5)); // true
console.log(str2.includes('Hello', 6)); // false
console.log();
// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束

// 6. 实例方法：repeat()     repeat方法返回一个新字符串，表示将原字符串重复n次
console.log('x'.repeat(3)); // "xxx"
console.log('hello'.repeat(2)); // "hellohello"
console.log('na'.repeat(0)); // ""
console.log('-----------------------------------------------------');
// 参数如果是小数，会被取整
console.log('na'.repeat(2.9)); // "nana"
console.log('-----------------------------------------------------');
// 如果repeat的参数是负数或者Infinity，会报错
// console.log('na'.repeat(Infinity)); // RangeError
// console.log('na'.repeat(-1)); // RangeError
console.log('-----------------------------------------------------');
// 参数NaN等同于 0
console.log('na'.repeat(NaN)); // ""
console.log('-----------------------------------------------------');
// 如果repeat的参数是字符串，则会先转换成数字
console.log('na'.repeat('na')); // ""
console.log('na'.repeat('3')); // "nanana"
console.log();

// 7. 实例方法：padStart()，padEnd()      padStart()用于头部补全，padEnd()用于尾部补全

// padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
console.log('BY&K'.padStart(6, '❤'));
console.log('BY&K'.padEnd(6, '❤'));
// 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串
console.log('BY&K❤BY&K'.padStart(6, '❤'));
console.log('BY&K❤BY&K'.padEnd(9, '❤'));
// 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串
console.log('BY&K❤BY&K'.padStart(10, '_❤_Smile_❤_smile'));
// 如果省略第二个参数，默认使用空格补全长度
console.log('BY&K'.padStart(9));
console.log('BY&K'.padEnd(9));
// padStart()的常见用途是为数值补全指定位数 & 提示字符串格式
console.log('1'.padStart(10, '0')); // "0000000001"
console.log('12'.padStart(10, '0')); // "0000000012"
console.log('123456'.padStart(10, '0')); // "0000123456"
console.log('12'.padStart(10, 'YYYY-MM-DD')); // "YYYY-MM-12"
console.log('09-12'.padStart(10, 'YYYY-MM-DD')); // "YYYY-09-12"

// 8. 实例方法：trimStart()，trimEnd()    行为与trim()一致
// trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串
// trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名

// 9. 实例方法：matchAll()