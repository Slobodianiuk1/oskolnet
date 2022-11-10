
export function tariffs() {



	const API = './js/tariffs.json';
	const MORE_BTN = document.querySelectorAll('.more')
	const POPUP = document.querySelector('#popup')


	let readJson = () => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => {

				getTariffsPopup(data);


			})
			.catch((error) => {
				console.log(error);
			})
	}



	let getTariffsPopup = (data) => {



		for (let i = 0; i < MORE_BTN.length; i++) {
			MORE_BTN[i].addEventListener("click", function () {


				POPUP.classList.add('active');
				document.body.classList.toggle('no-scroll');



				const TITLE = data[i].title;
				const SPEED = data[i].speed;
				const PRICE = data[i].price;

				POPUP.innerHTML = `<div class="popup__body popup__close" >

			<div class="popup__content ">
				<div class="popup__header">
					<span class="popup__title">Тариф «${TITLE}»</span>
					<button class="popup__close"  >&#10006;</button>
				</div>
				<div class="popup__main popup-main">
					<div class="popup-main__left">
						<span class="speed">${SPEED}</span>
						<ul >
							<li>
								<div>
									<svg class="icon">
										<use xlink:href="./img/sprite.svg#check"></use>
									</svg>
								</div>
								<p>Бесплатное подключение</p>
							</li>
							<li>
								<div>
									<svg class="icon">
										<use xlink:href="./img/sprite.svg#check"></use>
									</svg>
								</div>
								<p>Статический IP-адрес</p>
							</li>
						</ul>
						<span class="speed">Необходимое оборудование</span>
						<ul>
							<li>
								<div>
									<svg class="icon">
										<use xlink:href="./img/sprite.svg#check"></use>
									</svg>
								</div>
								<p>Wi-Fi роутер</p>
							</li>
						</ul>
						<p class="price">${PRICE} <span>₽/мес</span></p>
						<a class="btn" href="#">Подключить</a>
					</div>
		
					<div class="popup-main__right">
						<p>
							Интернет и IP-телевидение у вас дома! Высокая и стабильная скорость доступа в Интернет,
							множество популярных каналов: кино, детям, ток-шоу, бизнес, спорт, новости и пр. Тарифное
							предложение доступно для подключения новых и перехода действующих клиентов. Подключение
							производится при наличии технической возможности.
						</p>
						<ul class="bonus__list">
							<li class="bonus__item">
								<svg class="icon">
									<use xlink:href="./img/sprite.svg#features1"></use>
								</svg>
								<div class="title">Бонус 1</div>
							</li>
							<li class="bonus__item">
								<svg class="icon">
									<use xlink:href="./img/sprite.svg#features2"></use>
								</svg>
								<div class="title">Бонус 2</div>
							</li>
							<li class="bonus__item">
								<svg class="icon">
									<use xlink:href="./img/sprite.svg#features3"></use>
								</svg>
								<div class="title">Бонус 3</div>
							</li>
							<li class="bonus__item">
								<svg class="icon">
									<use xlink:href="./img/sprite.svg#features4"></use>
								</svg>
								<div class="title">Бонус 4</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>`
				const CLOSE = document.querySelector('.popup__close')
				console.log(CLOSE)


				CLOSE.addEventListener("click", function (e) {
					if (e.target.classList.contains('popup__close')) {
						POPUP.classList.remove('active');
						document.body.classList.remove('no-scroll')
					}
				});


				// CLOSE.onclick = function () { alert('clicked "b"') }
				// a.addEventListener("click", function (e) {
				// 	alert('clicked a');

				// 	e.stopPropagation();
				// }, true);
			});

		}



	}

	readJson();
}

export function search() {

	const BTN_SEARCH = document.querySelector('.btn-search');
	let input = document.querySelector('#input-s')




	let searchJson = () => {
		fetch('./js/connections.json')
			.then((response) => response.json())
			.then((data) => {

				BTN_SEARCH.addEventListener('click', e => {
					if (e.target)
						examination(data);
				})



				searchForm(data);

			})
			.catch((error) => {
				console.log(error);
			})
	}


	let searchForm = (data) => {




		let input = document.querySelector('#input-s');
		// let value = this.value.trim();
		let res = document.getElementById("result");
		let s = '';
		if (!input.value) {
			res.innerHTML = '';
			res.classList.add('hiden');

		}




		for (let i = 0; i < data.length; ++i) {

			if (data[i].st.search(input.value) !== -1) {
				s += `<option value="${i}" " > ${data[i].st}</option>`;

				result.addEventListener("change", function (e) {
					if (this.value == i) {
						document.getElementById("input-s").value = e.target.innerText;
					}
				});



			}
		}

		if (input == document.activeElement) {
			setInterval(function () {
				(input == document.activeElement) ? "yes" : res.classList.add('hiden');;
			}, 1000);
		}


		if (input.value) {
			res.innerHTML = s;
			res.classList.remove('hiden');
			if (!s) {
				res.classList.add('hiden');
			}
		} else {
			s = ''
			res.innerHTML = s;
			res.classList.add('hiden');
		}






		let i = 0;
		const dropdown = document.getElementById("result");
		const childs = dropdown.children;





		input.addEventListener("keydown", function (event) {
			switch (event.code) {
				case "ArrowDown":
					for (let c of childs)
						c.classList.remove('dropbtn-selected')
					childs[Math.abs(i) % childs.length].classList.add('dropbtn-selected');
					input.value = childs[Math.abs(i) % childs.length].innerText;
					i++;
					break;
				case "ArrowUp":
					for (let c of childs)
						c.classList.remove('dropbtn-selected')
					childs[Math.abs(i) % childs.length].classList.add('dropbtn-selected');
					input.value = childs[Math.abs(i) % childs.length].innerText;
					i--;
					break;

				case "Enter":
					res.classList.add('hiden');
					document.querySelector('.js-input-home').focus()
					break;


			}
		});




		document.getElementById("result").addEventListener("click", function (e) {
			if (e.target.tagName == 'OPTION') {
				document.getElementById("input-s").value = e.target.innerHTML;
				res.innerHTML = '';
				res.classList.add('hiden');
			}
		})
	}



	input.addEventListener('input', searchJson);






	let examination = (data) => {
		let popup = document.querySelector('.popup-search'),
			formInputs2 = document.querySelectorAll('.js-input-2');


		let st = document.querySelector('.js-input-st'),
			home = document.querySelector('.js-input-home'),
			valSt = st.value,
			valHome = home.value;




		formInputs2.forEach(function (input) {
			if (input.value === '') {
				input.classList.add('error');

			} else {
				input.classList.remove('error');
				if (valSt !== '' && valHome !== '') {

					popup.classList.add('active')
					document.body.classList.add('no-scroll');


					const P1 = valSt;
					const P2 = valHome;
					popup.innerHTML = `<div class="popup__body popup__close-2">
									<div class="black-backing"></div>
									<div class="popup__content red ">
										<div class="popup__header">
											<span class="popup__title">Проверка на подключение</span>
											<button class="popup__close-2">&#10006;</button>
										</div>
										<div class="popup__main popup-main">
											<p class="p">
											По адресу <strong> ${P1}</strong> дом <strong> ${P2}</strong> возможность подключения отсутствует :(
											</p>
										</div>
									</div>
								</div>`


					for (let i = 0; i < data.length; i++) {

						if (data[i].st == valSt) {
							data[i].home.forEach(function (item) {
								if (item == valHome) {
									popup.classList.add('active')
									const P1 = valSt;
									const P2 = valHome;
									popup.innerHTML = `<div class="popup__body popup__close-2">
									<div class="black-backing"></div>
									<div class="popup__content ">
										<div class="popup__header">
											<span class="popup__title">Проверка на подключение</span>
											<button class="popup__close-2">&#10006;</button>
										</div>
										<div class="popup__main popup-main">
											<p class="p">
												По адресу <strong> ${P1}</strong> дом <strong> ${P2}</strong> возможноe подключение :)
											</p>
										</div>
									</div>
								</div>`

								}
							})
						}
					}
				}


			}
		});


		const CLOSE_2 = document.querySelector('.popup__close-2')



		CLOSE_2.addEventListener("click", function (e) {
			if (e.target.classList.contains('popup__close-2')) {
				popup.classList.remove('active');
				document.body.classList.remove('no-scroll')
				formInputs2.forEach(e => {
					e.value = null;
				})

			}
		});




	}

	// BTN_SEARCH.addEventListener('click', searchJson)
}






export function galleryPopup() {


	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 500
		}
	});
}



export function popupConnection() {



	document.querySelectorAll('.connection').forEach(e => {

		e.addEventListener("click", function (e) {

			e.preventDefault()

			document.querySelector('.popup-connection').classList.add('active');
			document.body.classList.toggle('no-scroll');
		})



	})

	// .addEventListener("click", function (e) {

	// 	e.preventDefault()

	// 	document.querySelector('.popup-connection').classList.add('active');
	// 	document.body.classList.toggle('no-scroll');
	// })









	let phoneInput = document.querySelector(".phone3");

	const phoneMask = new IMask(phoneInput, {
		mask: "+{7}(000)000-00-00",
	});


	let form3 = document.querySelector('.js-form3'),
		formInputs3 = document.querySelectorAll('.js-inpu3'),
		inputPhone3 = document.querySelector('.js-input-phone3'),
		inputName3 = document.querySelector('.js-input-name3'),
		inputStr = document.querySelector('.js-input-str'),
		inputTime = document.querySelector('.js-input-time'),

		inputCheckbox3 = document.querySelector('.js-input-checkbox3');



	function validatePhone(phone) {
		let re = /^.{16}$/;
		return re.test(String(phone));
	}

	function validateName(name) {
		let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
		return re.test(String(name));
	}

	form3.onsubmit = function () {
		let phoneVal = inputPhone3.value,
			nameVal = inputName3.value,
			strVal = inputStr.value,
			timeVal = inputTime.value,
			emptyInputs = Array.from(formInputs3).filter(input => input.value === '');

		formInputs3.forEach(function (input) {
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

			inputPhone3.classList.add('error');
			return false;
		} else {
			inputPhone3.classList.remove('error');
		}

		if (!validateName(nameVal)) {

			inputName3.classList.add('error');
			return false;
		} else {
			inputName3.classList.remove('error');
		}

		if (!validateName(strVal)) {

			inputStr.classList.add('error');
			return false;
		} else {
			inputStr.classList.remove('error');
		}


		if (!validateName(timeVal)) {

			inputTime.classList.add('error');
			return false;
		} else {
			inputTime.classList.remove('error');
		}



		if (!inputCheckbox3.checked) {
			inputCheckbox3.classList.add('error');
			return false;
		} else {
			inputCheckbox3.classList.remove('error')
		}


	}


	const CLOSE_3 = document.querySelector('.popup__close-3')



	CLOSE_3.addEventListener("click", function (e) {
		if (e.target.classList.contains('popup__close-3')) {
			document.querySelector('.popup-connection').classList.remove('active');
			document.body.classList.remove('no-scroll')
			formInputs3.forEach(e => {
				e.value = null;
			})



			if (window.localStorage) {
				var elements = formInputs3;

				for (var i = 0, length = elements.length; i < length; i++) {
					(function (element) {
						var name = element.getAttribute('name');

						element.value = localStorage.getItem(name) || '';

						element.onkeyup = function () {
							localStorage.setItem(name, element.value);
						};
					})(elements[i]);
				}
			}

		}
	});

}