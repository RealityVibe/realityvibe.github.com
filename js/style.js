/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-25 10:48:44
 * @version $Id$
 */
var text1 = document.querySelector('.text1');
var mydate = new Date();
window.onload=function()
{
	var text1 = document.querySelector('.text1');
	setInterval(function(){
		var time  = new Date();
		var month = mydate.getMonth() + 1;
		var t = time.getFullYear()+'-'+month+'-'+time.getDate()
		+' '+time.getHours()+':'+time.getMinutes() + ":" 
		+ time.getSeconds();
		text1.innerHTML = t;
	},1000);
}
