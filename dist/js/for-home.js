// const NAV = document.querySelector('.header');
// const MENU_BUTTON = NAV.querySelector('.header__burger-btn');

// MENU_BUTTON.addEventListener('click', function () {
// 	NAV.classList.toggle('header_active');
// 	document.body.classList.toggle('no-scroll');
// });
// NAV.querySelectorAll('.menu__link').forEach(item => {
// 	item.addEventListener('click', function () {
// 		NAV.classList.remove('header_active');
// 		document.body.classList.remove('no-scroll');
// 	})
// })
// const TABS_BTN = document.querySelectorAll(".tabs__nav-btn");
// const TABS_ITEMS = document.querySelectorAll(".tabs__item");

// TABS_BTN.forEach(onTabClick);

// function onTabClick(item) {
// 	item.addEventListener("click", function () {
// 		let currentBtn = item;
// 		let tabId = currentBtn.getAttribute("data-tab");
// 		let currentTab = document.querySelector(tabId);

// 		if (!currentBtn.classList.contains('active')) {
// 			TABS_BTN.forEach(function (item) {
// 				item.classList.remove('active');
// 			});

// 			TABS_ITEMS.forEach(function (item) {
// 				item.classList.remove('active');
// 			});

// 			currentBtn.classList.add('active');
// 			currentTab.classList.add('active');
// 		}
// 	});
// }

// document.querySelector('.tabs__nav-btn').click();

// const SWIPER_TARIFS = new Swiper('.swiper-tariffs', {
// 	slidesPerView: 1.25,
// 	spaceBetween: 10,

// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true,
// 	},
// 	autoplay: {
// 		delay: 2000,
// 	},
// 	// loop: true,

// 	breakpoints: {
// 		576: {
// 			slidesPerView: 2,
// 		},
// 		768: {
// 			slidesPerView: 2.5,
// 		},
// 		1024: {
// 			slidesPerView: 4,
// 		},
// 		1200: {
// 			slidesPerView: 5,
// 		},
// 	},
// 	speed: 600,

// })\


// NAV
import { nav } from './components/nav.js';

nav();


// TAB
import { tab } from './components/tab.js';

tab();


// POPUP
import { tariffs, search, popupConnection } from './components/popup.js';

tariffs();
search();
popupConnection();
//  FORM

import { form1, } from './components/form.js';

form1();
// searchForm();

// SLIDER
import { tarif } from './components/slider.js';


tarif()
