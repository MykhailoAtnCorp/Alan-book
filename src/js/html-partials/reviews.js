export function initSwiper() {
	new Swiper('.reviews__slider', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.reviews__info-navigation-next',
			prevEl: '.reviews__info-navigation-prev'
		},
		pagination: {
			el: '.reviews__info-pagination',
			type: 'fraction'
		}
	})
}
