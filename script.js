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



