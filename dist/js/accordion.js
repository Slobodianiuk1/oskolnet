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
// ========================




document.querySelectorAll('.accordion').forEach((el) => {
	el.classList.remove('active');

	el.addEventListener('click', () => {


		let content = el.nextElementSibling;


		if (content.style.maxHeight) {
			document.querySelectorAll('.accordion-content').forEach((el) => el.style.maxHeight = null)
			el.classList.remove('active');

		} else {
			document.querySelectorAll('.accordion-content').forEach((el) => el.style.maxHeight = null)
			content.style.maxHeight = content.scrollHeight + 'px'

			document.querySelectorAll('.accordion').forEach((element) => {
				element.classList.remove('active');
			})



			el.classList.add('active');
		}
	})

})