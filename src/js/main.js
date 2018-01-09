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

/* Get Device Width */
function getWidth() {
	if (self.innerWidth) {
		return self.innerWidth;
	}

	if (document.documentElement && document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}

	if (document.body) {
		return document.body.clientWidth;
	}
}
function dropdown(triger, menu) {
	$(triger).hover(
		(event) => {
			$(event.currentTarget).find(menu).stop(true, true).fadeIn(300);
		},
		(event) => {
			$(event.currentTarget).find(menu).stop(true, true).fadeOut(150);
		}
	);
}

//
// CLASS - Mobile Menu
// =================================================================
class Menu {
	constructor() {
		this.closeMobileMenuOnOutOfClick();
		$('.js-nav-toggle').on('click', () => {
			this.toggleMenuVisibility();
			this.toggleMenuTriggerClass();
			this.toggleBodyBackground();
		});
	}
	/* eslint class-methods-use-this: ["error", { 
		"exceptMethods": [
			"toggleMenuVisibility",
			"toggleBodyBackground",
			"toggleMenuTriggerClass",
			"closeMobileMenuOnOutOfClick",
		] }] 
	*/
	toggleMenuVisibility() {
		$('.mobile-nav').toggleClass('is--visible');
	}
	toggleBodyBackground() {
		$('body').toggleClass('is--mobile-active');
	}
	toggleMenuTriggerClass() {
		$('.js-nav-toggle').toggleClass('is--active');
	}
	closeMobileMenuOnOutOfClick() {
		$('body').mouseup((e) => {
			let subject = $('.is--visible');

			if (subject.length
				&& !$(e.target).hasClass('js-nav-toggle')
				&& !$(e.target).hasClass('icon-nav')
				&& e.target.className !== subject.attr('class')
				&& !subject.has(e.target).length) {
				this.toggleMenuVisibility();
				this.toggleBodyBackground();
				this.toggleMenuTriggerClass();
			}
		});
	}
}
function initMenu() {
	return new Menu();
}
initMenu();

//
// Modal Popup
// =================================================================
$.arcticmodal('setDefault', {
	afterClose: () => {
		$('body').css({
			'overflow': 'auto',
			'margin-right': '0px',
		});
	},
});

$('[data-modal]').on('click', (e) => {
	e.preventDefault();
	let link = $(e.currentTarget).data('modal');

	if (link) {
		$(`#${link}`).arcticmodal();
	}
});

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
		prevArrow: $('.js-thumbs-slider-prev')
	});
}