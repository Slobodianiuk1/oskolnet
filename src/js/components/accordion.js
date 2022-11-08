
export function accordion() {


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


}