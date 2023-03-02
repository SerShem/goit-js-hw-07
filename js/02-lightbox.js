import { galleryItems } from './gallery-items.js';
/* import { lightboxInport } from '/simplelightbox-master/dist/simple-lightbox.min'; */
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector(`.gallery`);

const galleryImages = galleryItems
	.reduce((acum, galleryItems) =>
		acum += `<a class="gallery__item" href="${galleryItems.original}.jpg">
		<img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
	</a>`, '')

galleryConteiner.innerHTML = galleryImages;

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
	captionPosition: 'bottom',
	captionType: 'attr',
});

/* galleryConteiner.addEventListener('click', (evt) => {
	evt.preventDefault();

	if (evt.target.nodeName !== 'IMG' || evt.target === evt.currentTarget) {
		return;
	};
}); */