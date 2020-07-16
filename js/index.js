var links = document.querySelectorAll(".lun .g")
var lists = document.querySelectorAll(".lun-b img")
for (let i = 0; i < links.length; i++) {

    links[i].onmouseover = function () {
        for (var j = 0; j < lists.length; j++) {
            lists[j].style.display = "none";
            links[j].style.background = "rgb(255,255,255)";
        }
        lists[i].style.display = "block";
        links[i].style.background = "rgb(0, 178, 98)";
    }

}
var u = document.querySelectorAll(".fenlei")
var d = document.querySelector(".batar-right")
var m = document.querySelectorAll(".hhh")


for (var j = 0; j < u.length; j++) {
    d.style.display = "none"
    u[j].onmouseover = function () {
        d.style.display = "";
    }


    u[j].onmouseout = function () {
        d.style.display = "none"

    }
}

var sss = document.querySelector(".newtop")

document.onscroll = function () {
    let temp = document.documentElement.scrollTop
    console.log(temp)
    if (temp > 300) {
        animate(sss, {
            "top": 0
        }, 100)
    } else {
        animate(sss, {
            "top": -50
        }, 100)
    }

}