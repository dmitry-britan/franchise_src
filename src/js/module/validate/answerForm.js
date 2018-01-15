//
// Валидация формы "Ответить на сообщение"
// =================================================================
let validateFormAnswer = {
	rules: {
		answer: {
			required: true,
		},
	},
	messages: {
		answer: {
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

// ANSWER FORM
$('.js-form-answer').validate(validateFormAnswer);
