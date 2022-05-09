$(function() {
    load();
    //按下回车后将完整数据存储到本地存储里面
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getDate();
            // 将新数据更新并存储到本地存储中
            local.push({
                title: $(this).val(),
                done: false,
            });
            $(this).val("");
            saveDate(local);
        }
        load();
    });

    //删除数据操作，从本地存储中删除
    $("ol").on("click", "a", function() {
        var data = getDate();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveDate(data);
        load();
    });

    //复选框操作
    $("ol ,ul").on("click", "input", function() {
        var data = getDate();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveDate(data);
        load();
    });

    //获取数据函数，得到本地存储中的todolist
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //保存数据函数，将todolist存入本地存储
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    //渲染并加载数据
    function load() {
        //读取数据
        var data = getDate();
        var todocount = 0;
        var donecount = 0;
        $("ul,ol").empty();
        //遍历数据
        $.each(data, function(i, n) {
            var li1 =
                "<li> <input type ='checkbox' checked='checked' > <p>" +
                n.title +
                "</p> <a href ='javascript:;' id =" +
                i +
                "></a></li> ";
            var li2 =
                "<li> <input type ='checkbox' > <p>" +
                n.title +
                "</p> <a href ='javascript:;' id =" +
                i +
                "></a></li> ";
            if (n.done) {
                $("ul").prepend(li1);
                donecount++;
            } else {
                $("ol").prepend(li2);
                todocount++;
            }
        });
        $("#todocount").text(todocount);
        $("#donecount").text(donecount);
    }
});