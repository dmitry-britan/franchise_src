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
