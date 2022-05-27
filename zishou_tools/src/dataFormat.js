//定义格式化时间的函数

function dataFormat(datastr) {
    const dt = new Date(datastr);
    let y = padZero(dt.getFullYear());
    let m = padZero(dt.getMonth() + 1);
    let d = padZero(dt.getDay());
    let hh = padZero(dt.getHours());
    let mm = padZero(dt.getMinutes());
    let ss = padZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

//定义补零函数

function padZero(n) {
    return n > 9 ? n : "0" + n;
}
module.exports = {
    dataFormat,
};