burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftNav = document.querySelector('.leftNav')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', () => {
    leftNav.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})