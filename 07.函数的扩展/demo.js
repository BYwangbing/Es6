/**
 * @Description:
 * @author BY
 * @date 2019/9/9-22:18
 */
var id;
function foo4() {
    return () => {
        return () => {
            return () => {
                console.log('id:',this.id);
            };
        };
    };
}

var f = foo4.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

// ES6
function foo3() {
    setTimeout(() => {
        console.log('_id:', this.id);
    }, 100);
}
foo3.call({'_id': 1009});

function foo1() {
    setTimeout(() => {
        console.log('id:', this.id)
    },1000)
}
foo1.call({id: 2009});