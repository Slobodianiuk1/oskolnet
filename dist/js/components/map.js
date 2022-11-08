export function initMap() {
	const myLatLng = { lat: 51.31069638542042, lng: 37.89887356922796 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: myLatLng,
	});

	new google.maps.Marker({
		map: map,
		icon: "./img/contacts-marker.png",
		position: { lat: 51.31069638542042, lng: 37.89887356922796 },

		draggable: false
	});
}