let popupsData = [
	{
		id: 0,
		nextPopupId: 1,
		video: 'https://www.youtube.com/embed/BUKhyVpL8E0',
		formFields: [
			{
				label: 'Ваше имя',
				type: 'text',
				name: 'name',
				required: 'is--required',
			},
			{
				label: 'Ваш e-mail',
				type: 'email',
				name: 'email',
				required: 'is--required',
			},
			{
				label: 'Ваш телефон',
				type: 'text',
				name: 'phone',
				required: '',
			},
		],
		sendButton: 'Отправить',
	},
	{
		id: 1,
		nextPopupId: 2,
		video: 'https://www.youtube.com/embed/swv0G8mFZWY',
		formFields: [
			{
				label: 'Ваше имя',
				type: 'text',
				name: 'name',
				required: 'is--required',
			},
			{
				label: 'Ваш телефон',
				type: 'text',
				name: 'phone',
				required: 'is--required',
			},
		],
		sendButton: 'Оплатить',
	},
	{
		id: 2,
		nextPopupId: 0,
		video: 'https://www.youtube.com/embed/b7BzAsOCq1M',
		formFields: [
			{
				label: 'Ваш e-mail',
				type: 'email',
				name: 'email',
				required: 'is--required',
			},
			{
				label: 'Ваш пароль',
				type: 'password',
				name: 'password',
				required: 'is--required',
			},
		],
		sendButton: 'Войти',
	},
];

class PopupsCreator {
	constructor(popups) {
		this.modalsWrapper = $('.js-all-modals');
		this.defaultPopupId = this.getDefaultPopupId();

		popups.forEach((popup) => {
			this.createPopup(popup);
		});

		this.openDefaultPopup(this.defaultPopupId);
	}
	// создаем попап из полученных свойств объекта
	createPopup(popup) {
		let formFieldsHTML = this.createFormFields(popup.formFields);
		let template = this.getPopupTemplate(popup, formFieldsHTML);

		// добавляем код попапа в разметку
		this.appendCurrentPopup(template);
		// добавляем обработчик для кнопки текущего попапа
		this.setCurrentPopupAction(popup);
	}

	getPopupTemplate(popup, formFieldsHTML) {
		// шаблон HTML разметки будущего попап блока
		let template = `
			<div class="popup" id="popup_${popup.id}">
				<div class="popup__close arcticmodal-close js-never-show"></div>
				<div class="popup__inner is--wide">
					<div class="popup__body">
						<div class="popup__video">
							<iframe width="473" height="273" src="${popup.video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
						</div>
						<div class="popup__form">
							<form class="form js-form-video" action="">
								${formFieldsHTML}
								<div class="form__action">
									<button class="btn btn--primary btn--md js-form-action-${popup.id}" type="submit">${popup.sendButton}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		`;

		return template;
	}

	appendCurrentPopup(template) {
		this.modalsWrapper.append(template);
	}

	// открываем попап
	openDefaultPopup(id) {
		$(`#popup_${id}`).arcticmodal();
	}

	// записуем в куки ID всплывающего попапа
	getDefaultPopupId() {
		return parseInt($.cookie('defaultPopupId')) || 0;
	}

	setCurrentPopupAction(popup) {
		$(`.js-form-action-${popup.id}`).on('click', (event) => {
			event.preventDefault();
			$.arcticmodal('close');
			$(`#popup_${popup.nextPopupId}`).arcticmodal();

			// записуем в куки ID всплывающего поумолчанию попапа
			$.cookie('defaultPopupId', `${popup.nextPopupId}`);
		});
	}

	createFormFields(fields) {
		let formFields = '';

		fields.forEach((field) => {
			formFields += `
				<div class="form__field ${field.required}">
					<label class="label">${field.label}</label>
					<input class="input" type="${field.type}" name="${field.name}">
				</div>
			`;
		});

		return formFields;
	}
}

$(document).ready(() => {
	$('.js-never-show').on('click', () => {
		$.cookie('showVideoPopup', 'false', {expires: 365});
	});

	if ($.cookie('showVideoPopup') !== 'false') {
		new PopupsCreator(popupsData);
	}
});
