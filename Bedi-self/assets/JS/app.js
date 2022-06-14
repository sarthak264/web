// * Show ScrollTop on Scroll
function scrollToTop(){
    const scrollBtn = document.getElementById('scroll-to-top')
    if(this.scrollY >= 590){
        scrollBtn.classList.add('show-scroll')
    }else{
        scrollBtn.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollToTop)

// * Mobile Menu slide in Function
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

//  * Close menu on clicking any nav link
const navlinks = document.querySelectorAll('.nav_link')

function closeMenu(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}

navlinks.forEach((n) => {n.addEventListener('click',closeMenu)})

// * Add Shadow to header on scroll
function addShadow() {
    const nav = document.getElementById('header')

    if(this.scrollY>=200){
        nav.classList.add('header-shadow')
    }else{
        nav.classList.remove('header-shadow')
    }
}

window.addEventListener('scroll',addShadow)

// * SCROLL REVEAL ANIMATIONS
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: false
// });

// sr.reveal(`.home_data, .home_img,
//             .about_data, .about_img,
//             .services_content, .menu__content,
//             .app_data, .app_img,
//             .contact__data, .contact__button,
//             .footer__content`, {
//     interval: 200
// })