/**

 * @author BY

 * @date 2019-08-06 15:24

 */
function add([x, y]) {
    return x + y;
}
console.log(add([3, 7]));

[[1, 2], [3, 4]].map(([a, b]) => a + b);

function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

function _move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

_move({x: 3, y: 8}); // [3, 8]
_move({x: 3}); // [3, undefined]
_move({}); // [undefined, undefined]
_move(); // [0, 0]



// 用途
// 1.交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

// 2.从函数返回多个值
// 3.函数参数的定义
// 4.提取 JSON 数据
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: message } = jsonData;
console.log(id, status, message);
// 5.函数参数的默认值
// 6.遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// 获取键名
for (let [key] of map) {
    // ...
}

// 获取键值
for (let [,value] of map) {
    // ...
}
// 7.输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");