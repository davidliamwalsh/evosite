const burger = document.querySelector("div[data-behavior='burger']")
const nav = document.querySelector("ul[data-behavior='nav_links']")
const navLinks = document.querySelectorAll("li[data-behavior='nav_list']")
const linkHover = document.getElementById('nav_link-hover')
const linkDrop = document.getElementById('linkDrop')
const linkActive = document.getElementById('linkActive')

const navOpen = () => {
  nav.classList.toggle('c-nav--active')

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.2}s`
    }
  })
}

function dropOpen() {
  linkDrop.classList.add('c-nav__links_drop--active')
}

function dropClose() {
  linkDrop.classList.remove('c-nav__links_drop--active')
}

linkDrop.addEventListener('mouseleave', dropClose)
linkHover.addEventListener('mouseenter', dropOpen)
burger.addEventListener('click', navOpen)