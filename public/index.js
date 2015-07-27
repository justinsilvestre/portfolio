/*	var scrollBg = function() {
			var bg, section;
			for (var i = 1; i <= 3; i++) {
				bg = $('#bg' + i);
				section = $('.assets').children('section:nth-of-type('+ i + ')');

				var scrollTop = $(document).scrollTop();
				var viewportHeight = $(window).height();

				var reachedBg = ( scrollTop + (viewportHeight - bg.outerHeight())/2 ) >= bg.offset().top;
				var mainContent = $('#main-content');
				// var reachedBg = ( scrollTop + (viewportHeight - bg.outerHeight())/2 ) >= ( (mainContent.offset().top + mainContent.height()) * (0.25 + i * 0.25) );

				bg.toggleClass('scrolled', reachedBg);
				// bg.toggleClass('scrolled', ($(document).scrollTop() + ($(window).height()/2) - (bg.height()/2)) >= (bg.offset().top) )
			}
	};*/


$(function(){


	var assetsClicked = 0;
	$('#assets').on('click', 'h2', function() {
		if(!$(this).hasClass('clicked')) assetsClicked += 1;
		$(this).addClass('clicked');

		var i = ($(this).index() + 1 + 1) / 2;
		$('.details').removeClass('active');
		$('#assets').children('section:nth-of-type('+ i + ')').addClass('active');


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


		// scrollBg();
		// $(document).scroll(scrollBg);


});