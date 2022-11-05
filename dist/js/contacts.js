document.addEventListener('DOMContentLoaded', () => {

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
});
function initMap() {
	const myLatLng = { lat: 51.31069638542042, lng: 37.89887356922796 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: myLatLng,
	});

	new google.maps.Marker({
		map: map,
		icon: "../img/contacts-marker.png",
		position: { lat: 51.31069638542042, lng: 37.89887356922796 },

		draggable: false
	});
}
