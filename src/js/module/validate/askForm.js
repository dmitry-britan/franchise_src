//
// Валидация формы "Задать вопрос"
// =================================================================
let validateFormAsk = {
	rules: {
		name: {
			required: true,
		},
		email: {
			required: true,
			email: true,
		},
		comment: {
			required: true,
		},
	},
	messages: {
		name: {
			required: 'Введите Ваше имя',
		},
		email: {
			email: 'Введите корректный e-mail адрес',
			required: 'Введите Ваш e-mail',
		},
		comment: {
			required: 'Введите Ваше сообщение',
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

// ASK FORM
$('.js-form-ask').validate(validateFormAsk);
