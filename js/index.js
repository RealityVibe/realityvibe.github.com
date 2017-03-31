/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-31 21:09:13
 * @version $Id$
 */

var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d'),
webbg = new Image();
webbg.src = "img/webbg.jpg";
webbg.onload = function()
{
	 context.drawImage(webbg,0,0,canvas.width,canvas.height);
}