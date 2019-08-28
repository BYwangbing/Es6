/**

 * @author BY

 * @date 2019-08-05 20:47

 */
var a = 10;
function foo() {
    console.log(a); // ??
    var a = 20;
}
foo();

for (let i = 0; i < 10; i++) {
    // ...
}

console.log(i);
// ReferenceError: i is not defined