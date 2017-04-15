/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 14:07:51
 * @version $Id$
 */
// var flag = 0;
var key = 3;
$(init)
function init(){
	$('.ui-container-mask').toggle();
	$('img').click(function(event){
		$('.ui-container-mask').toggle();
		$('.ui-container-mask').append($(this).clone().addClass('ui-bin-img-clone'));
	});
    $('.ui-container-mask').click(function(event){
    	$('.ui-container-mask').toggle();
    	$('.ui-container-mask').empty();
    });

    $('.ui-page-text-word').hide();
    $('.ui-page-menu-select').click(function(event){
    	 $('.ui-page-text-word').hide();
    	 $('.ui-page-text-word').eq($(this).index()).show();
    	$('.ui-page-menu-select').css('background-color','white');
    	$(this).css("background-color","lightgray");
	 });
/*----------------------Part 3--------------------------------------------------*/
    $('.ui-data-item-opera').click(function(event){
    	var flag =$(this).index('.ui-data-item-opera');
    	$('.ui-data-item').eq(flag).remove('.ui-data-item');
    	$('.ui-data-item-order').eq(flag).remove('.ui-data-item-order');
    });

    $('.ui-data-button').click(function(event){
    	key = key+1;
    	$('.ui-data').append($('.ui-data-item-order').eq(0).html(key).clone(true));
    	$('.ui-data-item-order').eq(0).html(1);
    	$('.ui-data').append($('.ui-data-item').eq(0).clone(true));
    	// $('.ui-data-item-order').eq(key).html(" ");
    	// $('.ui-data-item').eq(key).append($('.ui-data-item-opera').eq(0).html("").clone(true));
    });
}
