function foo({x, y = 5}) {
    console.log(x, y);
}

foo({}); // undefined 5
foo({x: 1}); // 1 5
foo({x: 1, y: 2}); // 1 2
// foo(); // TypeError: Cannot destructure property `x` of 'undefined' or 'null'.

// 只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成
function foo2({x, y = 5} = {}) {
    console.log(x, y);
}

foo2(); // undefined 5

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}

fetch('http://example.com', {});

function fetch2(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}
fetch2('http://example.com');