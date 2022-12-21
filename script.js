// Greeting Animation

const greetingBubble = document.getElementById('greeting')

let timeNow = new Date().getHours()

let greeting = timeNow >= 5 && timeNow < 12 ? 'Good Morning!' : timeNow >= 12 && timeNow <= 18 ? 'Good afternoon!' : 'Good evening!';

greetingBubble.innerHTML = `${greeting}`


// Navigation

const primaryNav = document.querySelector('.primary-navigation')
const mobileNav = document.querySelector('.mobile-navigation')
const openToggle = document.getElementById('open')
const closeToggle = document.getElementById('close')

mobileNav.addEventListener('click', () => {
  const visible = primaryNav.getAttribute('data-visible')
  if (visible === 'false') {
    primaryNav.setAttribute('data-visible', true);
    openToggle.setAttribute('data-visible', false);
    closeToggle.setAttribute('data-visible', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    openToggle.setAttribute('data-visible', true);
    closeToggle.setAttribute('data-visible', false);
  }
})
