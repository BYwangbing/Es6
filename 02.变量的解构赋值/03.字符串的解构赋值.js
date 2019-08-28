/**

 * @author BY

 * @date 2019-08-06 15:22

 */
console.log('-----字符串也可以解构赋值,字符串被转换成了一个类似数组的对象-----');
const [a, b, c, d, e] = 'hello';
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d);// "l"
console.log(e);// "o"

let { length: len } = 'hello';
console.log(len);