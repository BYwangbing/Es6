var _f0 = v => v;

// 等同于
var f0 = function (v) {
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

// 箭头函数与变量解构结合使用
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function _full(person) {
    return person.first + ' ' + person.last;
}

// 箭头函数的一个用处是简化回调函数

// 正常函数写法
[1,2,3].map(function (x) {
    return x * x;
});
// 箭头函数写法
[1,2,3].map(x => x * x);

// // 正常函数写法
// var result = values.sort(function (a, b) {
//     return a - b;
// });
// // 箭头函数写法
// var _result = values.sort((a, b) => a -b);

// rest 参数与箭头函数结合的例子
const numbers = (...num) => num;
console.log(numbers(1, 2, 3, 4, 5));

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));

console.log();
/*

    箭头函数有几个使用注意点。

        （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

        （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

        （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

        （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

    上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

*/

// 箭头函数导致this总是指向函数定义生效时所在的对象

console.log('箭头函数导致this总是指向函数定义生效时所在的对象');

function foo1() {
    setTimeout(() => {
        console.log('id:', this.id)
    },1000)
}
var id = 1025;
foo1.call({id: 2009});

console.log('箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域');



function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

// 封装回调函数       DOM 事件的回调函数封装在一个对象里面

var handler = {
    id: '123456',
    init: function() {
        document.addEventListener('click',
            event => this.doSomething(event.type), false);
    },
    doSomething: function(type) {
        console.log('Handling ' + type  + ' for ' + this.id);
    }
};

// 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this
// 正是因为它没有this，所以也就不能用作构造函数

// 箭头函数转成 ES5

// ES6
function foo3() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

// ES5
function foo2() {
    var _this = this;
    setTimeout(function () {
        console.log('id:', _this.id);
    }, 100);
}

function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}

// function foo() {
//     return function () {
//         return function () {
//             return function () {
//                 console.log('id:', this.id);
//             }
//         }
//     }
// }


var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1
console.log();

// this，以下三个变量在箭头函数之中也是不存在的
// 指向外层函数的对应变量：arguments、super、new.target

// 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向

(function() {
    return [
        (() => this.x).bind({ x: 'inner' })()
    ];
}).call({ x: 'outer' });
// ['outer']

//由于箭头函数使得this从“动态”变成“静态”，下面两个场合不应该使用箭头函数

// 第一个场合是定义对象的方法，且该方法内部包括this。
const cat = {
    lives: 9,
    jumps:function () {
        return this.lives--;
    }
};

console.log('lives:', cat.jumps());
console.log();

// 第二个场合是需要动态this的时候，也不应使用箭头函数
// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//     this.classList.toggle('on');
// });

// 嵌套的箭头函数

// ES5 语法的多重嵌套函数
function _insert(value) {
    return {into: function (array) {
            return {after: function (afterValue) {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }};
        }};
}

_insert(2).into([1, 3]).after(1); //[1, 2, 3]

// 箭头函数
let insert = (value) => ({
    info: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log('insert: ', insert(3).info([1, 3]).after(5));
console.log('insert: ', insert(2).info([1, 3]).after(1)); //[1, 2, 3]

const plus1 = a => a + 1;
const mult2 = a => a * 2;

mult2(plus1(5));    // 12

