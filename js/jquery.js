
$(document).ready(function(){
	$('#bodycont').delay(2500) 
   	$('#bodycont').fadeIn(2500);

	$('#socialtag').mouseenter(function() {
		$('.socialbox').show();		
	});
	$('#socialtag').mouseleave(function() {
		$('.socialbox').hide();
	});		
});