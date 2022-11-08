
export function tab() {

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

}