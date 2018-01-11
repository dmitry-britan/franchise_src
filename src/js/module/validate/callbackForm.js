//
// Валидация формы "Заказать обратный звонок"
// =================================================================
let validateFormCallback = {
	rules: {
		name: {
			required: true,
		},
	},
	messages: {
		name: {
			required: 'Введите Ваше имя',
		},
	},
	submitHandler: (form) => {
		// ////////////////////
		//  AJAX CODE GOES HERE
		// ////////////////////
		form.reset();
	},
	focusCleanup: true,
	focusInvalid: false,
};

// CALLBACK FORM
$('.js-form-callback').validate(validateFormCallback);
