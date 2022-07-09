const nav  = document.querySelector("nav")

const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.addEventListener('click', () => {
  nav.classList.add('active')
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('active')
})