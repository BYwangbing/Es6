// 形式为  ...变量名
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    console.log(sum);
}

add(5, 7, 8);

console.log();

// arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}
// arguments对象不是数组，而是一个类似数组的对象
// 所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组

// rest参数的写法
const _sortNumbers = (...numbers) => numbers.sort();

// 利用 rest 参数改写数组push方法的例子

function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
        console.log(item);
    });
}

var a = [];
push(a, '0425', '1009', '0821', '1219');
console.log(a);
console.log();

// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错

// 函数的length属性，不包括 rest 参数
console.log((function(a) {}).length);  // 1
console.log((function(...a) {}).length); // 0
console.log((function (a, ...b) {}).length);  // 1

// 只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错