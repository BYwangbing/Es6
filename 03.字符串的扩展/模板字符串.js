// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// 模板字符串中嵌入变量，需要将变量名写在${}之中
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} + ${y * 2} = ${x + y * 2}`);

let obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);

// 模板字符串之中还能调用函数
function fn() {
    return "Hello World";
}
console.log(`foo ${fn()} bar`);

let func = (name) => `hello ${name} ！`;
console.log(func('BY&K'));

console.log('------***-----标签模板-----***-----');
// 紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串
// alert`123`;
// // 等同于
// alert(123);
console.log`123`;

let a = 5;
let b = 15;

tag`Hello ${a+b} word ${a*b}`;
// 等同于
tag(['hello', 'word', ''], 20, 75);

// function tag(stringArr, value1, value2){
//     // ...
// }

// 等同于

// tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，
// 也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推
function tag(stringArr, ...values){
    // ...
}

let c = 5;
let d = 10;

function tag2(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
    return "OK";
}

console.log(tag2`Hello ${c + d} Word ${c * d}`);

// 更复杂的例子: 如何将各个参数按照原来的位置拼合回去
console.log('------***-----如何将各个参数按照原来的位置拼合回去-----***-----');
let total = 30;
let msg = passThru`The total is ${total} (${total*1.05} with tax)`;

function passThru(literals) {
    let result = '';
    let i = 0;
    console.log(arguments);
    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}

console.log(msg);

console.log`123`; // ["123", raw: Array[1]]

console.log('“标签模板”的一个重要应用: 过滤 HTML 字符串，防止用户输入恶意内容');

function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

console.log(message);