const body = document.querySelector('body');
const navOpen = document.querySelector('.header__menu_open');
const navClose = document.querySelector('.header__menu_close');
const navList = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__item_link');
const slider = document.querySelector('.slider');
const sliderWindow = document.querySelector('.slider__window');
const sliderContent = document.querySelectorAll('.slider__content');
const sliderButtonLeft = document.querySelector('.slider__left_box');
const sliderButtonRight = document.querySelector('.slider__right_box');
let sliderCount = 0;
let sliderContentWidth = null;

function initSliderWidth() {
  sliderContentWidth = slider.offsetWidth;
  sliderWindow.style.width = sliderContentWidth * sliderContent.length + 'px';
  sliderContent.forEach(item => {
    item.style.width = sliderContentWidth + 'px';
  })
  scrollSlider();
}

function scrollSlider() {
  sliderWindow.style.transform = 'translate(-' + sliderCount * sliderContentWidth +'px';
}

navClose.addEventListener('click', () => {
  navList.classList.remove('nav__open');
  body.classList.remove('scroll__block');
})

navOpen.addEventListener('click', () => {
  navList.classList.add('nav__open');
  body.classList.add('scroll__block');
})

navLink.forEach(link => {
  link.addEventListener('click', (e)=> {
    e.preventDefault();
    navList.classList.remove('nav__open');
    body.classList.remove('scroll__block');
  })
})

window.addEventListener('resize', initSliderWidth);

initSliderWidth();

sliderButtonRight.addEventListener('click', () => {
  sliderCount++;
  if (sliderCount >= sliderContent.length) {
    sliderCount = 0;
  }
  scrollSlider()
})

sliderButtonLeft.addEventListener('click', (e) => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderContent.length - 1;
  }
  scrollSlider()
})