/**

 * @author BY

 * @date 2019-08-06 08:41

 */
// 基本用法

// 类似于数组，但是成员的值都是唯一的，没有重复的值，长度为size
let arr = [2, 3, 5, 4, 5, 2, 2];
let set = new Set(arr);
console.log(set);// 2,3,5,4

console.log('----- 去除数组的重复成员 ' + '[...new Set(array)] -----');


/*
* 操作方法：
    add(value)：添加某个值，返回 Set 结构本身。
    delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    has(value)：返回一个布尔值，表示该值是否为Set的成员。
    clear()：清除所有成员，没有返回值
* */

const s = new Set();
s.add(1).add(2).add(2);// 注意2被加入了两次
s.size;// 2
s.has(1); // true
s.has(2); // true
s.has(3); // false
s.delete(2);
s.has(2);// false

//Array.from方法可以将 Set 结构转为数组。
const list = new Set([1, 2, 5, 3, 4, 5]);
const array = Array.from(list);
console.log(array);

//这就提供了去除数组重复成员的另一种方法。
function dedupe(array) {
    return Array.from(new Set(array));
}
console.log(dedupe([1, 1, 2, 3]));// [1, 2, 3]

// 用于去除数组重复元素
const m = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => m.add(x));
for (let i of m) {
    console.log(i);
}
const set_1 = new Set([1, 2, 3, 4, 4]);
console.log([...set_1]);

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5

let set_2 = new Set();
set_2.add({});
console.log(set_2.size);// 1
set_2.add({});
console.log(set_2.size);// 2



//遍历
let set_ergodic = new Set(['red', 'green', 'blue']);
console.log('-----keys方法遍历-------keys():返回键名');
for (let item of set_ergodic.keys()) {
    console.log(item);
}
console.log('-----values方法遍历-------values():返回键值');
for (let item of set_ergodic.values()) {
    console.log(item);
}
console.log('-----entries方法遍历-------entries():返回键值对');
for (let item of set_ergodic.entries()) {
    console.log(item);
}
console.log('-----forEach方法遍历-------forEach():使用回调函数遍历每一个成员');
set_ergodic.forEach(((value, key) => {
    console.log(key +  ': ' + value);
}));