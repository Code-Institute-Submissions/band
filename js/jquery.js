
$(document).ready(function(){
	$('#bodycont').delay(2500) 
   	$('#bodycont').slideToggle(2500);

	$('#socialtag').mouseenter(function() {
		$('.socialbox ul').show();		
	});
	$('#socialtag').mouseleave(function() {
		$('.socialbox ul').hide();
	});		
});