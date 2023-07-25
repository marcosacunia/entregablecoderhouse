const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  slideIndex = Math.min(slideIndex + 1, 3); // 3 es el índice máximo (0 al 3 para 4 imágenes)
  updateSlidePosition();
});

function updateSlidePosition() {
  carouselContainer.style.transform = `translateX(-${slideIndex * 25}%)`;
}