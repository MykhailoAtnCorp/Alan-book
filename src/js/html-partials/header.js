export function openBurgerMenu() {
	const burger = document.querySelector('.header__burger')
	const headerMenu = document.querySelector('.header__menu-wrapper')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		headerMenu.classList.toggle('open')
		body.classList.toggle('lock')
	})
}
