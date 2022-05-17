window.onload = function() {
    var flag = true;
    var tds = document.querySelectorAll("td");
    //重新开始游戏
    var start = function() {
        for (let i = 0; i < tds.length; i++) {
            tds[i].innerText = "";
            //井字格点击
            tds[i].onclick = function() {
                if (flag) {
                    this.innerText = "⚪";
                    flag = false;
                    // console.log(flag);
                } else {
                    this.innerText = "×";
                    flag = true;
                }
                this.onclick = "";
                ifwin(i);

                // console.log(i);
            };
        }
    };
    start();
    //开始游戏
    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        // console.log("1");
        start();
    });

    //判断输赢
    var ifwin = function(i) {
        // alert("调用");
        switch (i) {
            //零号格子
            case 0:
                if (
                    (tds[0].innerText == tds[1].innerText &&
                        tds[0].innerText == tds[2].innerText) ||
                    (tds[0].innerText == tds[3].innerText &&
                        tds[0].innerText == tds[6].innerText) ||
                    (tds[0].innerText == tds[4].innerText &&
                        tds[0].innerText == tds[8].innerText)
                ) {
                    alert(tds[0].innerText + "方胜");
                }
                break;
                //一号格子
            case 1:
                if (
                    (tds[1].innerText == tds[0].innerText &&
                        tds[1].innerText == tds[2].innerText) ||
                    (tds[1].innerText == tds[4].innerText &&
                        tds[1].innerText == tds[7].innerText)
                ) {
                    alert(tds[1].innerText + "方胜");
                }
                break;
                //二号格子
            case 2:
                if (
                    (tds[2].innerText == tds[1].innerText &&
                        tds[2].innerText == tds[0].innerText) ||
                    (tds[2].innerText == tds[5].innerText &&
                        tds[2].innerText == tds[8].innerText) ||
                    (tds[2].innerText == tds[4].innerText &&
                        tds[2].innerText == tds[6].innerText)
                ) {
                    alert(tds[2].innerText + "方胜");
                }
                break;
                //三号格子
            case 3:
                if (
                    (tds[3].innerText == tds[0].innerText &&
                        tds[3].innerText == tds[6].innerText) ||
                    (tds[3].innerText == tds[4].innerText &&
                        tds[3].innerText == tds[5].innerText)
                ) {
                    alert(tds[3].innerText + "方胜");
                }
                break;
                //四号格子
            case 4:
                if (
                    (tds[4].innerText == tds[0].innerText &&
                        tds[4].innerText == tds[8].innerText) ||
                    (tds[4].innerText == tds[1].innerText &&
                        tds[4].innerText == tds[7].innerText) ||
                    (tds[4].innerText == tds[2].innerText &&
                        tds[4].innerText == tds[6].innerText) ||
                    (tds[4].innerText == tds[3].innerText &&
                        tds[4].innerText == tds[5].innerText)
                ) {
                    alert(tds[4].innerText + "方胜");
                }
                break;
                //五号格子
            case 5:
                if (
                    (tds[5].innerText == tds[2].innerText &&
                        tds[5].innerText == tds[8].innerText) ||
                    (tds[5].innerText == tds[3].innerText &&
                        tds[5].innerText == tds[4].innerText)
                ) {
                    alert(tds[5].innerText + "方胜");
                }
                break;
                //六号格子
            case 6:
                if (
                    (tds[6].innerText == tds[0].innerText &&
                        tds[6].innerText == tds[3].innerText) ||
                    (tds[6].innerText == tds[2].innerText &&
                        tds[6].innerText == tds[4].innerText) ||
                    (tds[6].innerText == tds[7].innerText &&
                        tds[6].innerText == tds[8].innerText)
                ) {
                    alert(tds[6].innerText + "方胜");
                }
                break;
                //七号格子
            case 7:
                if (
                    (tds[7].innerText == tds[1].innerText &&
                        tds[7].innerText == tds[4].innerText) ||
                    (tds[7].innerText == tds[6].innerText &&
                        tds[7].innerText == tds[8].innerText)
                ) {
                    alert(tds[7].innerText + "方胜");
                }
                break;
                //八号格子
            case 8:
                if (
                    (tds[8].innerText == tds[0].innerText &&
                        tds[8].innerText == tds[4].innerText) ||
                    (tds[8].innerText == tds[2].innerText &&
                        tds[8].innerText == tds[5].innerText) ||
                    (tds[8].innerText == tds[7].innerText &&
                        tds[8].innerText == tds[6].innerText)
                ) {
                    alert(tds[8].innerText + "方胜");
                }
                break;
        }
    };
};