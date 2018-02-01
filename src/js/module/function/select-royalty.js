let $royaltySelect = $('.js-select-royalty');
let $royaltyInputs = $('.js-input-royalty');
let royaltyInputId = 0;

if ($royaltySelect.length) {
	$royaltySelect.on('change', (e) => {
		royaltyInputId = $(e.currentTarget).val();
		$royaltyInputs.addClass('is--hidden');
		$royaltyInputs.eq(royaltyInputId).toggleClass('is--hidden is--active');
	});
}
