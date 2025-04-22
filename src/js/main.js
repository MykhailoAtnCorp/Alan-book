// import modules
import { openBurgerMenu } from './html-partials/header'
import { animationBook, animationText } from './html-partials/hero'
import { line } from './html-partials/introduction'
import { initSwiper } from './html-partials/reviews'
document.addEventListener('DOMContentLoaded', async () => {
	openBurgerMenu()
	animationBook()
	animationText()
	line()
	initSwiper()
})
