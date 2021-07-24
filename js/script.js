/* function for toggle switch in menu bar for small devices */

document.getElementById('menu_icon').onclick = function () {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));

    var side_menu_bar = document.getElementById('side_menu_bar');
    side_menu_bar.classList.toggle('aside_open');
    side_menu_bar.classList.toggle('aside_close');
}
window.onscroll = function (e) {
    const header = document.getElementsByTagName('header')[0];
    const logo = document.getElementsByClassName('logo')[0];
    const menu_bar  =document.getElementsByClassName('line');
    const nav_link = document.getElementsByClassName('nav_link');
    if (window.scrollY !== 0 ){
         header.style.background = "var(--primary_background)"; 
         logo.style.color = 'var(--white_font)';
         Array.from(menu_bar).forEach(ele => ele.style.stroke = 'var(--white_font)')
         Array.from(nav_link).forEach(ele => ele.style.color = 'var(--white_font)')
        }
    else{
        header.style.background = "transparent";
        logo.style.color = 'var(--primary_background)';  
        Array.from(menu_bar).forEach(ele => ele.style.stroke = 'var(--primary_background)')
        Array.from(nav_link).forEach(ele => ele.style.color = 'var(--primary_background)')
       }
}
