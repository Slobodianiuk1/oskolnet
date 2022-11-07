document.addEventListener('DOMContentLoaded', () => {

	//  Меню 
	const NAV = document.querySelector('.header');
	const MENU_BUTTON = NAV.querySelector('.header__burger-btn');

	MENU_BUTTON.addEventListener('click', function () {
		NAV.classList.toggle('header_active');
		document.body.classList.toggle('no-scroll');
	});
	NAV.querySelectorAll('.menu__link').forEach(item => {
		item.addEventListener('click', function () {
			NAV.classList.remove('header_active');
			document.body.classList.remove('no-scroll');
		})
	})



	// TABS
	const TABS_BTN = document.querySelectorAll(".tabs__nav-btn");
	const TABS_ITEMS = document.querySelectorAll(".tabs__item");

	TABS_BTN.forEach(onTabClick);

	function onTabClick(item) {
		item.addEventListener("click", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if (!currentBtn.classList.contains('active')) {
				TABS_BTN.forEach(function (item) {
					item.classList.remove('active');
				});

				TABS_ITEMS.forEach(function (item) {
					item.classList.remove('active');
				});

				currentBtn.classList.add('active');
				currentTab.classList.add('active');
			}
		});
	}

	document.querySelector('.tabs__nav-btn').click();


});

// Swiper slider

// Hero
const SWIPER_HERO = new Swiper('.swiper', {
	effect: "fade",
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 2000,
	},
	loop: true,
})
// Partners
const SWIPER_PARTNERS = new Swiper('.swiper-partners', {
	slidesPerView: 1,
	spaceBetween: 36,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 2000,
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 4,
		},
	},
	speed: 600,

})

// news

const NEWS_SLIDER = document.querySelector('.swiper-news')

let newsSwiper;
function mobileSlider() {
	if (window.innerWidth <= 768 && NEWS_SLIDER.dataset.mobile == 'false') {
		newsSwiper = new Swiper(NEWS_SLIDER, {
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			autoplay: {
				delay: 2000,
			},
			speed: 600,
		});

		NEWS_SLIDER.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		NEWS_SLIDER.dataset.mobile = 'false';
		if (NEWS_SLIDER.classList.contains('swiper-initialized')) {
			newsSwiper.destroy();
		}

	}
}
mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider()
});

const SWIPER_TARIFS = new Swiper('.swiper-tariffs', {
	slidesPerView: 1.25,
	spaceBetween: 10,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 2000,
	},
	// loop: true,

	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2.5,
		},
		1024: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	},
	speed: 600,

})

// -----------------
// POPUP TARIFFS

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
	let re = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
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


//  ПОИСК

// ВАЛИДАЦИЯ 

const SEARCH = './js/connections.json';
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












