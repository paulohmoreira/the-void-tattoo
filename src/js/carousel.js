export function createCarousel() {
  const controls = document.querySelectorAll('button.controls');
  const slides = document.querySelectorAll('.carousel__slide');

  let currentSlide = 0;
  const slideCount = slides.length - 1;

  if (controls.length) {
    controls.forEach((control) => {
      control.addEventListener('click', () => {
        handleClick(control);
      });
    });
  }

  function handleClick(button) {
    const isLeft = button.classList.contains('previous');
    isLeft ? (currentSlide -= 1) : (currentSlide += 1);

    if (currentSlide > slideCount) currentSlide = 0; // assegurando que não tera slide index negativo
    else if (currentSlide < 0) currentSlide = slideCount; // assegurando que não tera slide index maior que o número de items

    slides[currentSlide].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
}
