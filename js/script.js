const burgerBtn = document.querySelector('.nav__burger-box')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')

const toggleNav = () => {
	nav.classList.toggle('show')
}

burgerBtn.addEventListener('click', toggleNav)
navLinks.forEach(link => link.addEventListener('click', toggleNav))
