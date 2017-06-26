/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-31 21:09:13
 * @version $Id$
 */


    // 轮播图
 //因为使用了document，所以js需要放在需要执行的代码下面生效才能生效
var li=document.getElementById('lunbo').getElementsByTagName("li");
var num=0;
var len=li.length;

setInterval(function(){
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";

},2000);//切换时间


// 左滑
/* var speedpic = 2000;//速度数值越大速度越慢
    document.getElementById("luara-list2").innerHTML = document.getElementById("luara-list1").innerHTML;
    function Marqueepic() {
        if (document.getElementById("luara-list2").offsetWidth
                - document.getElementById("lunbo").scrollLeft <= 0) {
            document.getElementById("lunbo").scrollLeft -= document
                    .getElementById("luara-list1").offsetWidth;
        } else {
            document.getElementById("lunbo").scrollLeft++;
        }
    }
var MyMarpic = setInterval(Marqueepic, speedpic);
    document.getElementById("lunbo").onmouseover = function() {
        clearInterval(MyMarpic);
    }
    document.getElementById("lunbo").onmouseout = function() {
        MyMarpic = setInterval(Marqueepic, speedpic);
    }*/

