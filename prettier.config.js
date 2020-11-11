/**
 * @file 解决使用 vscode 配置 prettier 不生效问题
 * @author lishaohai
 */

// 官网地址 https://prettier.io/docs/en/configuration.html

// 比较好的文章：https://juejin.im/post/5cc58039f265da03775c5a6f

// 浅谈如何用 VS Code 舒服地编码：https://www.jianshu.com/p/25b87bc8d36a

// Prettier格式化配置（推荐）：https://www.cnblogs.com/oneweek/p/11236515.html

module.exports = {
    trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    tabWidth: 4, // 缩进字节数
    semi: true, // 句尾添加分号
    singleQuote: true, // 使用单引号代替双引号
    proseWrap: 'never',
    printWidth: 120, // 超过最大值换行
    bracketSpacing: false, // 对象紧贴花括号部分不允许包含空格
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    space_after_anon_function: true,
    space_after_named_function: true
};
