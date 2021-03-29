
//Nav functions
const displayNav = () => topNav.style.display === 'block' ? topNav.style.display = 'none' : topNav.style.display = 'block';

const icon = document.querySelector('#icon')
icon.addEventListener('click', displayNav);

const topNav = document.querySelector('#myLink');

