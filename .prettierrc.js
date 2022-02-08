/*
 * @Author: tengye
 * @Date: 2022-02-08 15:26:25
 * @LastEditors: tengye
 * @LastEditTime: 2022-02-08 15:28:17
 * @FilePath: /.prettierrc.js
 * @Description:
 */
module.exports = {
  "printWidth": 200, //一行的字符数，如果超过会进行换行，默认为80
  "tabWidth": 2, //一个tab代表几个空格数，默认为2
  "semi": true,    // 使用分号, 默认true
  "singleQuote": true,   // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  "bracketSpacing": true,   // 对象中的空格 默认true
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  // "arrowParens": "avoid",
}
