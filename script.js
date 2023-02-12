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


// Greeting time of the day

const greeting = document.getElementById('greeting')

let timeNow = new Date().getHours()


let greetingTime = timeNow >= 5 && timeNow < 12 ? 'Good Morning!' : timeNow >= 12 && timeNow <= 18 ? 'Good afternoon!' : 'Good evening!';

greeting.innerHTML = `${greetingTime}`


// Contact Form

const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userMessage = document.getElementById('message')
const success = document.getElementById('success')
const errorNodes = document.querySelectorAll('.error')
const form = document.querySelector('.contact-form')


function sendMail () {
  const params = {
		name: userName.value,
		email: userEmail.value,
		message: userMessage.value,
	}

	const serviceID = 'service_cmr1b6j'
	const templateID = 'template_0oy3vpm'

  clearMessages();
  let errorFlag = false;

  if(userName.value === "" || userName.value == null) {
    errorNodes[0].innerText = "Name cannot be blank";
    userName.classList.add('error')
    errorFlag = true;
  }
  if(!userEmail.value.match(/\S+@\S+\.\S+/)) {
    errorNodes[1].innerText = "Invalid email address";
    userEmail.classList.add('error')
    errorFlag = true;
  }
  if(userMessage.value === "" || userMessage.value == null) {
    errorNodes[2].innerText = "Please write something";
    userMessage.classList.add('error')
    errorFlag = true;
  }
  if(!errorFlag) {
    success.style.display = 'block'
    success.innerHTML = 'Message sent. Thank you'
    form.reset()

    emailjs.send(serviceID, templateID, params).then((res) => {
			userName.value = ''
			userEmail.value = ''
			userMessage.value = ''
		})
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = " ";
  }
  userName.classList.remove('error');
  userEmail.classList.remove('error');
  userMessage.classList.remove('error');
};
