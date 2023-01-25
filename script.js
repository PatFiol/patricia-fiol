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

const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const success = document.getElementById('success')
const errorNodes = document.querySelectorAll('.error')
const form = document.querySelector('.contact-form')


function validateForm () {

  clearMessages();
  let errorFlag = false;

  if(nameInput.value === "" || nameInput.value == null) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add('error')
    errorFlag = true;
  }
  if(!email.value.match(/\S+@\S+\.\S+/)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add('error')
    errorFlag = true;
  }
  if(message.value === "" || message.value == null) {
    errorNodes[2].innerText = "Please write something";
    message.classList.add('error')
    errorFlag = true;
  }
  if(!errorFlag) {
    success.style.display ='block';
    success.innerHTML = 'Message sent. Thank you!'
  }

}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = " ";
  }
  nameInput.classList.remove('error');
  email.classList.remove('error');
  message.classList.remove('error');
};
