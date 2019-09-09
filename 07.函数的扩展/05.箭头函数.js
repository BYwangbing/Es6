var f0 = v => v;

// 等同于
var f1 = function (v) {
    return v;
};

// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

var f2 = () => 5;
// 等同于
var f3 = function () { return 5 };

var sum1 = (num1, num2) => num1 + num2;
// 等同于
var sum2 = function (num1, num2) {
    return num1 + num2
};
// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
// 报错
// let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let _getTempItem = id => ({ id: id, name: "Temp" });

// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了

let fn = () => void doesNotReturn();

