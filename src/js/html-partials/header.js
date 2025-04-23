export function openBurgerMenu() {
	const burger = document.querySelector('.header__burger')
	const headerMenu = document.querySelector('.header__menu-wrapper')
	const body = document.querySelector('body')
	const overlay = document.querySelector('.header__overlay')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		headerMenu.classList.toggle('open')
		body.classList.toggle('lock')
		overlay.classList.toggle('overlay-open')
	})
	overlay.addEventListener('click', () => {
		headerMenu.classList.toggle('open')
		overlay.classList.toggle('overlay-open')
		body.classList.toggle('lock')
		burger.classList.toggle('active')
	})
}
