export function initSwiper() {
	const imageReviews = new Swiper('.reviews__image', {
		slidesPerView: 1,
		loop: true,
		speed: 600,
		effect: 'creative',
		watchSlidesProgress: true,
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ['-100%', 0, -1]
			},
			next: {
				shadow: true,
				translate: ['100%', 0, 0]
			}
		},
	})

	const reviewsSwiper = new Swiper('.reviews__slider', {
		slidesPerView: 1,
		watchSlidesProgress: true,
		speed: 600,
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
	reviewsSwiper.controller.control = imageReviews
	imageReviews.controller.control = reviewsSwiper
}
