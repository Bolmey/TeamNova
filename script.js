

//Nav functions

const icon = document.querySelector('.icon')
icon.addEventListener('click', displayNav);

const topNav = document.querySelector('.topNav');

const displayNav = () => topNav.style.display === 'block' ? topNav.style.display = 'hidden' : topNav.style.display = 'block';