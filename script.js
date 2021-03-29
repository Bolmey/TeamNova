

//Nav functions

const icon = document.querySelector('.icon')
icon.addEventListener('click', displayNav);

const topNav = document.querySelector('.topNav');

const displayNav = () => {
    if (topNav.style.display === 'block'){
        topNav.style.display = 'hidden';
    }
    else {
        topNav.style.display = 'block';
}
}