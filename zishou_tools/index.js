//包的入口文件
const data = require("./src/dataFormat");

const escape = require("./src/htmlEscape");
//向外暴漏需要的成员
module.exports = {
    ...data,
    ...escape,
};