let $currencySelect = $('.js-select-currency');
let $currencyInputs = $('.js-input-currency');

if ($currencySelect.length) {
	$currencySelect.on('change', (e) => {
		let currency = $(e.currentTarget).find('option:selected').data('currency');

		$currencyInputs.text(currency);
	});
}
