/**

 * @author BY

 * @date 2019-08-06 16:32

 */

console.log('模板字符串: ');
// 模板字符串（template string）是增强版的字符串，用反引号（`）标识

// 传统的 JavaScript 语言
$('#result').append(
    'There are <b>' + basket.count + '</b> ' +
    'items in your basket, ' +
    '<em>' + basket.onSale +
    '</em> are on sale!'
);
// ES6 引入模板字符串
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
// trim方法消除换行
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());