import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  function sendForm() {
    const formData = {
      email,
      message,
    };
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }

  sendForm();
}

function onInputFill(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const formData = {};
const savedInLocal = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedInLocal) {
  form.email.value = savedInLocal.email;
  form.message.value = savedInLocal.message;
}

form.addEventListener('input', throttle(onInputFill, 500));
form.addEventListener('submit', onFormSubmit);
