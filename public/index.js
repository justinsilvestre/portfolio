$(function(){


	var assetsClicked = 0;
	$('#assets').on('click', 'h2', function() {
		if(!$(this).hasClass('clicked')) assetsClicked += 1;
		$(this).addClass('clicked');

		var i = ($(this).index() + 1 + 1) / 2;
		$('.details').removeClass('active');
		$('#assets').children('section:nth-of-type('+ i + ')').addClass('active');

			$('.bg').removeClass('active');
			$('#bg'+ i).addClass('active');


		if (assetsClicked === 3) {
			$('h1').addClass('all-clicked');
			//body addclass allclicked.... change styles
		}

		$('.all-clicked').on('click', function() {
			$('.bg').addClass('active');
			$(this).removeClass('all-clicked');
			$('h2').removeClass('clicked');
			assetsClicked = 0;
		})

	});


		// scrollBg();
		// $(document).scroll(scrollBg);


	$('#gallery').on('click', 'a', function(event) {
		event.preventDefault();
		var src =  $(this).attr('href');
		$('#lightbox').remove();
		$('body').append('<div id="lightbox">');
		$('#lightbox').appendTo('body').append('<img src="' + src + '">')
			.on('click', function(event) {
				event.preventDefault();
				$(this).remove();
		});
	});



});