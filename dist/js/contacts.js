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







function initMap() {
	const myLatLng = { lat: -25.363, lng: 131.044 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8,
		center: myLatLng,
	});

	new google.maps.Marker({
		map: map,
		// icon: "../img/Pin.svg",
		position: { lat: -24.5, lng: 130.044 },

		draggable: false
	});
}