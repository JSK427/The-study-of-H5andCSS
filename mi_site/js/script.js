foo: {
    console.log("111");
    break foo;
    console.log("本行不会输出");
}
console.log(2);