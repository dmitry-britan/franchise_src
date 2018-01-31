// 
// Валидация формы "Форма с видео, cookie popup"
// =================================================================
let videoFormRegistration = {
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

// VIDEO FORM
$('.js-form-video').validate(videoFormRegistration);
