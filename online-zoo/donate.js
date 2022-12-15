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

// get input value

const donateForm = document.querySelector('#donate_sum');
const inputDonate = document.querySelector('#input_donate');

const valueList = document.querySelectorAll('input[name="donate_scale"]');

donateForm.addEventListener('click', () => {
  const donateValue = document.querySelector('input[name="donate_scale"]:checked').value;
  inputDonate.value = donateValue;
});

inputDonate.addEventListener('keyup', () => {
  valueList.forEach((el) => {
    if (+inputDonate.value === +el.value) {
      el.checked = 'checked';
      console.log(+inputDonate.value === +el.value);
    } else {
      el.removeAttribute('checked');
    }
  });
});
