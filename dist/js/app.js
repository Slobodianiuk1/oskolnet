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

