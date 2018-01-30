$('.js--submenu-toggler').on('click', (e) => {
	e.preventDefault();
	$('.js--submenu-branches, .js--submenu-categories').toggleClass('is--active');
});
