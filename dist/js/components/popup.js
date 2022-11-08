
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


	let form2 = document.querySelector('.js-form-2'),
		formInputs2 = document.querySelectorAll('.js-input-2');


	let searchJson = () => {
		fetch('./js/connections.json')
			.then((response) => response.json())
			.then((data) => {

				console.log(data)
				examination(data)

			})
			.catch((error) => {
				console.log(error);
			})
	}

	let examination = (data) => {
		let popup = document.querySelector('.popup-search'),
			formInputs2 = document.querySelectorAll('.js-input-2');


		let st = document.querySelector('.js-input-st'),
			home = document.querySelector('.js-input-home'),
			valSt = st.value,
			valHome = home.value;

		// function validateSt(street) {
		// 	if (!street) return street;

		// 	street[0].toUpperCase() + street.slice(1);

		// 	return false;
		// }


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
								<div class="popup__content">
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
								<div class="popup__content">
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
			}
		});




	}

	BTN_SEARCH.addEventListener('click', searchJson)
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