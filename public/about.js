


$(function() {

	$('#flash-link').on('click', function(event) {
		event.preventDefault();	
		$('#flash').fadeIn();
	});

	$('#flash').on('click', function() {
		$(this).fadeOut();
	});

});