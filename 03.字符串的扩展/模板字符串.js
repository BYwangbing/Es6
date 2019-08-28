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