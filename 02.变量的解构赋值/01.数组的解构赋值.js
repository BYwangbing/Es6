/**

 * @author BY

 * @date 2019-08-06 08:33

 */
console.log('可以从数组中提取值，按照对应位置，对变量赋值');
let [a, b, c] = [1, 2, 3];//模式匹配
console.log('这种写法属于“模式匹配”');

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [x, y, ...z] = ['a'];
console.log(x); // "a"
console.log(y); // undefined
console.log(z); // []
// 默认值

console.log('-----解构赋值允许指定默认值-----');
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined

let [m = 1] = [undefined];
console.log(m);// 1

let [n = 1] = [null];
console.log(n); // null
console.log('-----当一个数组成员严格等于undefined，默认值才会生效-----');