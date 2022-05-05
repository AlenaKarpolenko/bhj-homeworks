const sliders = document.querySelectorAll('.slider__item');
const next = document.querySelector('div.slider__arrow.slider__arrow_next');
const previous = document.querySelector('div.slider__arrow.slider__arrow_prev');
currentSlide = 0;

next.onclick = function () {
  sliders[currentSlide].className = 'slider__item';
  if (currentSlide < sliders.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  sliders[currentSlide].className = 'slider__item slider__item_active';
};

previous.onclick = function () {
  sliders[currentSlide].className = 'slider__item';
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = sliders.length - 1;
  }
  sliders[currentSlide].className = 'slider__item slider__item_active';
};