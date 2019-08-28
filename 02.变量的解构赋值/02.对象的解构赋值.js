/**

 * @author BY

 * @date 2019-08-06 11:15

 */
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
console.log(foo); // "aaa"
console.log(bar); // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz); // undefined

console.log('-----变量必须与属性同名，才能取到正确的值-----');

// 例一
let { _log, sin, cos } = Math;
// 例二
const { log } = console;
log('hello');// hello

console.log('-----变量名与属性名不一致-----');
let {fao, fao: bax } = { fao: 'aaa', bar: 'bbb' };
console.log(bax); // "aaa"
console.log(fao + 'f');

console.log('-----解构也可以用于嵌套结构的对象-----');
let obj = {
  p: [
      'hello',
      { y: 'word' }
  ]
};
let { p, p:[x,{ y }] } = obj;
console.log(p);
console.log(x);
console.log(y);

const name = {
  loc: {
      info: {
          age: 'BY',
          sex: '女'
      }
  }
};

let {loc, loc: {info}, loc: {info: {age, sex}}} = name;
console.log(loc);
console.log(info);
console.log(age + ' + ' + sex);

console.log('-----嵌套赋值-----');
let _obj = [];
let _arr = [];
({ a: _obj.prop, b: _arr[0] } = { a: 123, b: true });
console.log(_obj);
console.log(_arr);

console.log('-----对象的解构也可以指定默认值-----默认值生效的条件是，对象的属性值严格等于undefined');
var {m = 3} = {m: undefined};
console.log(m); // 3

var {n = 3} = {n: null};
console.log(n);// null

// 错误的写法
// let x;
// {x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
// let x;
// ({x} = {x: 1});