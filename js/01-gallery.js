import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector(`.gallery`);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.*/

const galleryImages = galleryItems
	.reduce((acum, galleryItems) =>
		acum += `<div class="gallery__item">
							<a class="gallery__link" href="${galleryItems.original}">
								<img class="gallery__image" src="${galleryItems.preview}" data-sourse="${galleryItems.original}" alt="${galleryItems.description}"/>
							</a>
						</div>`, '')

galleryConteiner.innerHTML = galleryImages;

/* Реалізація делегування на div.gallery і отримання url великого зображення.*/

/*Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.*/

/* Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією і прикладами.*/

/* Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.*//*Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox. */

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
	if (evt.code !== "Escape") {
		instance.close();
	};
});