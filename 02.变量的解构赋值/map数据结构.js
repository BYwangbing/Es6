/**
 * @author BY
 * @date 2019-08-06 15:29
 */

// https://www.cnblogs.com/sky903700252/p/8798309.html

// 创建一个map
const m = new Map();
m.set('foo', true);
m.set('bar', false);

console.log(m.size); // 2

const map = new Map([
    ['a',1],
    ['b',2]
]);
console.log(map);
// map类的属性——size     用于获取map的长度
console.log(map.size);
// map类的方法——set   Map.set(key,value)
// 设置键名key对应的键值为value，然后返回整个map结构
// 如果key已经有值，则键值会被更新，否则生成新的键
console.log(map.set([1,2,3],'3元素的数组'));
//也可以链式添加
map.set('name','张三').set('age',28);
console.log(map);
// map类的方法——get  Map.get(key)    读取key对应的键值，如果获取不到则返回undefined
console.log(map.get('name'));
// map类的方法——delete   Map.delete(key)     删除某个键，如果删除成功返回true，否则返回false
console.log(map.delete('name'));
// map类的方法——has      Map.has(key)        判断某个键是否存在于map中，返回布尔值
console.log(map.has('age'));
// map类的方法——keys     Map.keys()          返回键名的遍历器
console.log(map.keys());
// map类的方法——values   Map.values()        返回键值的遍历器
console.log(map.values());
// map类的方法——entries  Map.entries()       返回键值对的遍历器
console.log(map.entries());
// map类的方法——forEach  map.forEach(function(){})   使用回调遍历每一个成员
map.forEach(function (value, key, map) {
    console.log(`这是key：${key}, 这是value：${value}, 这是map本身：${map}`);
});

// Map 结构原生提供三个遍历器生成函数和一个遍历方法。
for (let [key, value] of map.entries()){
    console.log(key, value);
}
// 等同于使用map.entries()
for (let [key, value] of map){
    console.log(key, value);
}

// map类的方法——clear    Map.clear()         清除所有数据，没有返回值
map.clear();

map.set(NaN,1).set(NaN,10);
console.log(map);

map.set({},1).set({},2);
console.log(map);



console.log('Map 与其他数据结构的互换：');

//Map 转为数组:扩展运算符（...）
const myMap = new Map();
myMap.set(true, 7);
myMap.set({foo: 3}, ['abc']);
console.log([...myMap]);

//数组 转为 Map

new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
]);
