//  попап фотографий 


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