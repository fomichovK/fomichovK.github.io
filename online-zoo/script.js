const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.sliderLeft',
    prevEl: '.sliderRight',
  },
});
// swiperTestimonials

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width > 641) {
    const testimonials = new Swiper('.swiperTestimonials', {
      initialSlide: 0,

      breakpoints: {
        625: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1161: { slidesPerView: 4 },
      },

      scrollbar: {
        el: '.progressBar',
        draggable: true,
        dragSize: 100,
      },
    });
  }
});

// burger and shadow
const menuBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const autor = document.querySelector('.autor');
const shadow = document.querySelector('.shadow');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('visible');
  nav.classList.toggle('visible');
  shadow.classList.toggle('header_shadow');
});

// rendom cards

const arrImg = [
  './assets/img/Rectangle1.png',
  './assets/img/Rectangle2.png',
  './assets/img/Rectangle3.png',
  './assets/img/Rectangle4.png',
  './assets/img/Rectangle5.png',
  './assets/img/Rectangle6.png',
  './assets/img/Rectangle7.png',
];

const img = document.querySelectorAll('.card_img');
for (let i = 0; i < img.length; i++) {
  img[i].src = arrImg[Math.floor(Math.random() * arrImg.length)];
}

//popUp
const feedbacks = document.querySelectorAll('.feedback');
const close = document.querySelector('.popUp_close');
const popUp = document.querySelector('.feedback_popUp');
const popUp_shadow = document.querySelector('.popUp_shadow');

feedbacks.forEach((el) => {
  el.addEventListener('click', function () {
    popUp.classList.add('popUp_visible');
    popUp_shadow.classList.toggle('header_shadow');
  });
});

close.addEventListener('click', () => {
  popUp.classList.remove('popUp_visible');
});

popUp_shadow.addEventListener('click', () => {
  popUp.classList.remove('popUp_visible');
});
shadow.addEventListener('click', () => {
  menuBtn.classList.remove('visible');
  nav.classList.remove('visible');
  shadow.classList.remove('header_shadow');
});

// input email
const emailRaeg = /.+@(.+\.)+.+/iu;
const input = document.querySelector('.emailInput');
const submit = document.querySelector('.submitInput');

function isEmailValid(value) {
  return emailRaeg.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    submit.classList.remove('mistake');
    submit.classList.add('default');
  } else {
    submit.classList.add('mistake');
  }
}

input.addEventListener('input', onInput);
