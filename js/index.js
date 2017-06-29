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

/*setInterval(function(){
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";

},2000);//切换时间*/


// 左滑
 /*图片滚动效果*/

 //速度数值越大速度越慢
var speedpic = 3500;//换图间隔时间
var speed2 = 10;//换图用时

var flag = 1365;//换图信号
var MyMar;
document.getElementById("luara-list2").innerHTML = document.getElementById("luara-list1").innerHTML;
function Mar(){
    clearInterval(MyMarpic);
    if (document.getElementById("luara-list2").offsetWidth
            - document.getElementById("lunbo").scrollLeft <= 0) {
        document.getElementById("lunbo").scrollLeft -= document
                .getElementById("luara-list1").offsetWidth;
    } else {
        document.getElementById("lunbo").scrollLeft = document.getElementById("lunbo").scrollLeft + 15;
        flag = flag -15;
        console.log(flag);
        if(flag <= 0){
          // flag=1366;
          clearInterval(MyMar);
          MyMarpic = setInterval(Marqueepic, speedpic);
        }
    }
}
function Marqueepic() {
    flag=1365;
    MyMar = setInterval(Mar, speed2);
    // console.log(2000);
}
var MyMarpic = setInterval(Marqueepic, speedpic);

/* mouseon 暂停*/    
/*document.getElementById("lunbo").onmouseover = function() {
    clearInterval(MyMarpic);
}
document.getElementById("lunbo").onmouseout = function() {
    MyMarpic = setInterval(Marqueepic, speedpic);
}*/
