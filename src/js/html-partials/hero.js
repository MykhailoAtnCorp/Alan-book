export function animationBook() {
	const images = document.querySelectorAll('.hero__book-content-image')

	setTimeout(() => {
		images.forEach((image) => {
			image.classList.remove('initial')
			image.classList.add('active')
		})
	}, 150)
}

export function animationText() {
	const element = document.querySelector('.hero__book-descr')
	if (!element) return

	const text =
		'Create a perfect gift for family or friends, a book with them as the main character, with their face on the cover. Any genre, style, or premise. Create your masterpiece now.'
	let index = 0

	function typeNextChar() {
		if (index < text.length) {
			element.textContent += text.charAt(index)
			index++
			setTimeout(typeNextChar, 20)
		}
	}

	function startTyping() {
		setTimeout(() => {
			typeNextChar()
		}, 900)
	}

	if (window.innerWidth < 768) {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
						startTyping()
						obs.unobserve(element)
					}
				})
			},
			{
				threshold: 0.1
			}
		)
		observer.observe(element)
	} else {
		startTyping()
	}
}
