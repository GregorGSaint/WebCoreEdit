export function width () {

var menu = document.querySelector('.menu');
var demonstration = document.querySelector('.demonstration');
var brands = document.querySelector('.brands');
var repair = document.querySelector('.repair');
var prices = document.querySelector('.prices');
var footer = document.querySelector('.footer');

if (window.innerWidth > 1365) {

    menu.style.boxShadow = 'none';

    var finalWidth = window.innerWidth - menu.offsetWidth;

    demonstration.style.width = finalWidth + 'px';
    demonstration.style.marginLeft = menu.offsetWidth + 24 + 'px';

    brands.style.width = finalWidth + 'px';
    brands.style.marginLeft = menu.offsetWidth + 24 + 'px';

    repair.style.width = finalWidth + 'px';
    repair.style.marginLeft = menu.offsetWidth + 24 + 'px';

    prices.style.width = finalWidth + 'px';
    prices.style.marginLeft = menu.offsetWidth + 24 + 'px';

    footer.style.width = finalWidth + 'px';
    footer.style.marginLeft = menu.offsetWidth + 24 + 'px';
}
}