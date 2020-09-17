const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', toggle);

function toggle() {
    const mobileNav = document.querySelector('.navs-span');
    mobileNav.classList.toggle('hidden');
}
