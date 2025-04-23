export function showBg() {
	const footer = document.querySelector('.footer')
	const bgImage = document.querySelector('.footer__bg')
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
					bgImage.classList.add('animate-book')
					observer.unobserve(entry.target)
				}
			})
		},
		{
			threshold: 0.7
		}
	)

	if (footer) {
		observer.observe(footer)
	}
}
