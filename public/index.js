$(function(){

	$('body').removeClass('stop-transitions');

	var assetsClicked = 0;
	$('.assets').on('click', 'h2', function() {
		if(!$(this).hasClass('clicked')) assetsClicked += 1;
		$(this).addClass('clicked');

		var i = ($(this).index() + 1 + 1) / 2;
		$('.details').removeClass('active');
		$('.assets').children('section:nth-of-type('+ i + ')').addClass('active');


		if (assetsClicked <3) {
			$('.bg').removeClass('active');
			$('#bg'+ i).addClass('active');
		}


		if (assetsClicked === 3) {
			$('h1').addClass('all-clicked');
			//body addclass allclicked.... change styles
					$('.bg').addClass('active');
		} 
	});

});