let $advertisingSelect = $('.js-select-advertising');
let $advertisingInputs = $('.js-input-advertising');
let advertisingInputId = 0;

if ($advertisingSelect.length) {
	$advertisingSelect.on('change', (e) => {
		advertisingInputId = $(e.currentTarget).val();
		$advertisingInputs.addClass('is--hidden');
		$advertisingInputs.eq(advertisingInputId).toggleClass('is--hidden is--active');
	});
}
