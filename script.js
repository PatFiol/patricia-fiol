const greetingBubble = document.getElementById('greeting')

let timeNow = new Date().getHours()

let greeting = timeNow >= 5 && timeNow < 12 ? 'Good Morning!' : timeNow >= 12 && timeNow <= 18 ? 'Good afternoon!' : 'Good evening!';

greetingBubble.innerHTML = `${greeting}`