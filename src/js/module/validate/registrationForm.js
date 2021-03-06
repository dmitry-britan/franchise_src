// 
// Валидация формы "Быстрая Регистрация"
// =================================================================
let validateFormRegistration = {
	rules: {
		name: {
			required: true,
		},
		email: {
			required: true,
			email: true,
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
	},
	focusCleanup: true,
	focusInvalid: false,
};

// REGISTRATION FORM
$('.js-form-registration').validate(validateFormRegistration);
