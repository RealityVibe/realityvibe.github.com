/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-31 21:09:13
 * @version $Id$
 */

$(init)
function init(){
	$('.ui-main-body-mask').fadeToggle();
	$('img').click(function(event){
		$('.ui-main-body-mask').fadeToggle();
		$('.ui-main-body-mask').append($(this).clone().removeClass().addClass('ui-main-img-mask'));
	});
	$('.ui-main-body-mask').click(function(event){
    	$('.ui-main-body-mask').fadeToggle();
    	$('.ui-main-body-mask').empty();
    });
}