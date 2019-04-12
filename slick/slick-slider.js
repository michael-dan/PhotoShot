$('.carousel').slick({
	    adaptiveHeight: true,
	    infinite: true,
	    speed: 1000,
	    dots: true,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    slidesToScroll: 1,
	    centerMode: true,
	    centerPadding: '0px',
	    slidesToShow: 3,
	    focusOnSelect: true,
	    responsive: [{
	            breakpoint: 768,
	            settings: {
	                arrows: false,
	            }
	        },
	        {
	            breakpoint: 480,
	            settings: {
	                arrows: false,
	                centerMode: true,
	                centerPadding: '40px',
	                slidesToShow: 1
	            }
	        }
	    ]
	    });