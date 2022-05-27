//定义转义HTML的方法
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case '"':
                return "&quot;";
        }
    });
}
//定义还原HTML的方法
function htmlunEscape(str) {
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g, (match) => {
        switch (match) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&amp;":
                return "&";
            case "&quot;":
                return '"';
        }
    });
}
module.exports = {
    htmlEscape,
    htmlunEscape,
};