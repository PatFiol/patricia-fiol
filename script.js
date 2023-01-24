var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

// Hamburguer Menu

const hamburger = document.querySelector('.nav-list .hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_item = document.querySelectorAll('.nav-list ul li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


// Greeting according to time of the day

const greeting = document.getElementById('greeting')

let timeNow = new Date().getHours()


let greetingTime = timeNow >= 5 && timeNow < 12 ? 'Good Morning!' : timeNow >= 12 && timeNow <= 18 ? 'Good afternoon!' : 'Good evening!';

greeting.innerHTML = `${greetingTime}`


// Contact Form Validation

const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
// const success = document.querySelector('#success')
const errorNodes = document.querySelectorAll('.error')
const submitBtn = document.querySelector('#submit')


submitBtn.addEventListener('submit', function validateForm() {
  console.log('error!!!!!!!!!!!!')
  // event.preventDefault();
  clearMessages();

  if(nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add('error')
  }
  if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add('error')
  }
  if(message.value.length < 1) {
    errorNodes[2].innerText = "Please write something";
    message.classList.add('error')
  }

})

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = " ";
  }
  nameInput.classList.remove('error');
  email.classList.remove('error');
  message.classList.remove('error');
};

function emailIsValid() {
  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
}
