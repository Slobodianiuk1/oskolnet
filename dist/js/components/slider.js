
export function hero() {

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

}




export function partners() {

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

}





export function news() {

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


}

export function tarif() {
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
}