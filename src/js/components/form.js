export function form1() {

	// PHONE MASK ВАЛИДАЦИЯ 



	let phoneInput = document.querySelector(".phone");

	const phoneMask = new IMask(phoneInput, {
		mask: "+{7}(000)000-00-00",
	});


	let form = document.querySelector('.js-form'),
		formInputs = document.querySelectorAll('.js-input'),
		inputPhone = document.querySelector('.js-input-phone'),
		inputName = document.querySelector('.js-input-name'),
		inputCheckbox = document.querySelector('.js-input-checkbox');



	function validatePhone(phone) {
		let re = /^.{16}$/;
		return re.test(String(phone));
	}

	function validateName(name) {
		let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
		return re.test(String(name));
	}

	form.onsubmit = function () {
		let phoneVal = inputPhone.value,
			nameVal = inputName.value,
			emptyInputs = Array.from(formInputs).filter(input => input.value === '');

		formInputs.forEach(function (input) {
			if (input.value === '') {
				input.classList.add('error');

			} else {
				input.classList.remove('error');
			}
		});

		if (emptyInputs.length !== 0) {

			return false;
		}


		if (!validatePhone(phoneVal)) {

			inputPhone.classList.add('error');
			return false;
		} else {
			inputPhone.classList.remove('error');
		}

		if (!validateName(nameVal)) {

			inputName.classList.add('error');
			return false;
		} else {
			inputName.classList.remove('error');
		}

		if (!inputCheckbox.checked) {
			inputCheckbox.classList.add('error');
			return false;
		} else {
			inputCheckbox.classList.remove('error')
		}


	}


}