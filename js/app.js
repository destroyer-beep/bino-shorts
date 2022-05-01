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
const footerLink = document.querySelectorAll('.footer__link');
const form = document.getElementById('feedback__form');
const inputName = document.getElementById('feedback__form_name');
const inputEmail = document.getElementById('feedback__form_email');
const inputSubject = document.getElementById('feedback__form_subject');
const inputMessage = document.getElementById('feedback__form_message');
const formButton = document.getElementById('feedback__form_button');
let sliderCount = 0;
let sliderContentWidth = null;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

// Slider

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

// NavBar

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

// Footer link

footerLink.forEach(item => {
  item.addEventListener('click', (e)=> {
    e.preventDefault();
  })
})

// validation email

inputEmail.addEventListener('input', () => {
  if (inputEmail.value === '') {
    inputEmail.classList.remove('input__error');
    inputEmail.classList.remove('input__resolve');
    formButton.classList.remove('btn__orange');
    formButton.classList.remove('feedback__form_button');
    formButton.classList.add('btn__disabled')
    formButton.disabled = true;
    formButton.className = 'btn__disabled';
  } else if (regExpEmail.test(inputEmail.value)) {
    inputEmail.classList.remove('input__error');
    inputEmail.classList.add('input__resolve');
    formButton.classList.remove('btn__disabled');
    formButton.classList.add('feedback__form_button');
    formButton.classList.add('btn__orange');
    formButton.disabled = false;
    
  } else {
    inputEmail.classList.add('input__error');
    inputEmail.classList.remove('input__resolve');
    formButton.classList.remove('btn__orange');
    formButton.classList.remove('feedback__form_button');
    formButton.classList.add('btn__disabled');
    formButton.disabled = true;
  }
})

// Отправка данных

// function checkInput(str) {
//   if (str === '') {
//     return true;
//   } else {
//     return false;
//   }
// }

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const userData = {
//     name: inputName.value,
//     email: inputEmail.value,
//     subject: inputSubject.value,
//     message: inputMessage.value
//   };
//   try {
//     for(let data in userData) {
//       if (data === '') {
//         throw new Error(data);
//       }
//       if(data === userData.email) {
//         const checkedEmail = regExpEmail.test(data);

//         if(!checkedEmail) {
//           throw new Error(data);
//         }
//       }
//     }

//     let response = await fetch('/reg', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     console.log(result)
//   } catch(error) {
//     console.log(error)
//   }
// })

formButton.addEventListener('click', (e) => {
  let result = fetch('/regist', {
    method: 'POST',
    body: new FormData(form)
  })
})

    