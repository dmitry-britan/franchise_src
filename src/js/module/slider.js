//
// CLASS - Slider
// =================================================================
class Slider {
	constructor(selector, options) {
		this.options = options;
		this.slider = selector.bxSlider(this.options());

		this.watch();
	}

	getSettings() {
		return this.options();
	}

	reloadSettings() {
		this.slider.reloadSlider($.extend(this.getSettings(), {startSlide: this.slider.getCurrentSlide()}));
	}

	watch() {
		let slider = this;

		$(window).on('resize load', () => {
			setTimeout(slider.reloadSettings(), 500);
		});
	}
}

function createSlider(selector, options) {
	return new Slider(selector, options);
}


//
// Slider - on main page
// =================================================================
if ($('.js-slider').length) {
	$('.js-slider').slick({
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		//autoplay: true,
		adaptiveHeight: true,
		nextArrow: $('.js-slider-next'),
		prevArrow: $('.js-slider-prev')
	});
}

//
// Slider - franchise thumbs
// =================================================================
if ($('.js-thumbs-slider').length) {
	$('.js-thumbs-slider').slick({
		arrows: true,
		vertical: true,
		infinite: true,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		//autoplay: true,
		adaptiveHeight: true,
		nextArrow: $('.js-thumbs-slider-next'),
		prevArrow: $('.js-thumbs-slider-prev'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					vertical: false,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow: 1,
				},
			},
		],
	});
}
