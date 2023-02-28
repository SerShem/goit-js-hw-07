import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
 */
const galleryConteiner = document.querySelector(`.gallery`);

const galleryImages = galleryItems
	.reduce((acum, galleryItems) =>
		acum += `<a class="gallery__item" href="large-image.jpg">
		<img class="gallery__image" src="small-image.jpg" alt="Image description" />
	</a>`, '')

galleryConteiner.innerHTML = galleryImages;

galleryConteiner.addEventListener('click', (evt) => {
	evt.preventDefault();

	if (evt.target.nodeName !== 'IMG' || evt.target === evt.currentTarget) {
		return;
	};
	const instance = basicLightbox.create(`<img src = "${evt.target.dataset.sourse}" alt="${evt.target.alt} width="1280"/>`);
	instance.show();
});

galleryConteiner.addEventListener("keydown", (evt) => {
	evt.preventDefault();
	if (evt.code === "Escape") {
		instance.close();
	};
});