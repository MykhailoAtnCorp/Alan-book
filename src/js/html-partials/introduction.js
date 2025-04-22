export function line() {
	const listItems = document.querySelectorAll(
		'.introduction__info-features-item'
	)

	// Обрабатываем каждый элемент
	listItems.forEach((item) => {
		// Сохраняем текущий текст
		const text = item.textContent

		// Очищаем содержимое элемента
		item.textContent = ''

		// Создаем линию до текста
		const beforeLine = document.createElement('span')
		beforeLine.className = 'line-before'

		// Создаем контейнер для текста
		const textSpan = document.createElement('span')
		textSpan.className = 'text-span'
		textSpan.textContent = text

		// Создаем линию после текста
		const afterLine = document.createElement('span')
		afterLine.className = 'line-after'

		// Добавляем все элементы в список
		item.appendChild(beforeLine)
		item.appendChild(textSpan)
		item.appendChild(afterLine)

		// Добавляем класс для отслеживания
		item.classList.add('animate-when-visible')
	})

	// Создаем Intersection Observer
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				// Если элемент видим на 50% или более
				if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
					// Добавляем класс для запуска анимации
					entry.target.classList.add('animate-line-visible')

					// После анимации отключаем наблюдение за этим элементом
					observer.unobserve(entry.target)
				}
			})
		},
		{
			threshold: 0.5 // Настраиваем порог видимости 50%
		}
	)

	// Начинаем наблюдение за всеми элементами списка
	document.querySelectorAll('.animate-when-visible').forEach((item) => {
		observer.observe(item)
	})
}
