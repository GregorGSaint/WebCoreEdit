export function menu () {

var buttons = document.querySelectorAll('.services__button');
var button1 = document.querySelector('.services__button--1');
var button2 = document.querySelector('.services__button--2');
var button3 = document.querySelector('.services__button--3');
var button4 = document.querySelector('.services__button--4');
var button5 = document.querySelector('.services__button--5');
var button6 = document.querySelector('.services__button--6');
var button7 = document.querySelector('.services__button--7');
var button8 = document.querySelector('.services__button--8');
var langButtons = document.querySelectorAll('.language__button');
var langButtonRu = document.querySelector('.language__button--ru');
var langButtonEn = document.querySelector('.language__button--en');
var langButtonCh = document.querySelector('.language__button--ch');
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');
var menuClose = document.querySelector('.head__burger');
var header = document.querySelector('.header');
var main = document.querySelector('main');

if (window.innerWidth > 1365) {
    menuClose.style.display = 'none';
    main.style.display = 'flex';
    main.style.flexWrap = 'wrap';
   }

   if (window.innerWidth < 1366) {
     menu.style.display = 'none';
   }

   if (window.innerWidth < 1366) {
     window.addEventListener('click', function(e) {
       if (!e.target.closest('.menu') && !e.target.closest('.header__burger') && !e.target.closest('.header__call') && !e.target.closest('.call') && !e.target.closest('.feedback') && !e.target.closest('.header__chat'))  {
        menu.style.display = 'none';  
        main.style.opacity = '1';    
       }   
     });    
   }

   burger.addEventListener ( 'click', function() {
   menu.style.display = 'flex';
     main.style.opacity = '0.1';
   });

   menuClose.addEventListener('click', function() {
       menu.style.display = 'none';
         main.style.opacity = '1';
   });

document.addEventListener ( 'DOMContentLoaded', function(){
    button1.classList.add('slide-menu__button--active');
    });
    
button1.addEventListener ( 'click', function(){  
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button1.classList.add('services__button--active');
    });

button2.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button2.classList.add('services__button--active');
    });

button3.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button3.classList.add('services__button--active');
    });

button4.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button4.classList.add('services__button--active');
    });
    
button5.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button5.classList.add('services__button--active');
    });

button6.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button6.classList.add('services__button--active');
    });

button7.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button7.classList.add('services__button--active');
    });
    
button8.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('services__button--active');
    }
    button8.classList.add('services__button--active');
    });



document.addEventListener ( 'DOMContentLoaded', function(){
    langButtonRu.classList.add('language__button--active');
    });

langButtonRu.addEventListener ('click', function(){
        for (var i = 0; i < langButtons.length; i++) {
            langButtons[i].classList.remove('language__button--active');
        }
        langButtonRu.classList.add('language__button--active');
        }); 
        
langButtonEn.addEventListener ('click', function(){
        for (var i = 0; i < langButtons.length; i++) {
            langButtons[i].classList.remove('language__button--active');
        }
        langButtonEn.classList.add('language__button--active');
        });
        
langButtonCh.addEventListener ('click', function(){
        for (var i = 0; i < langButtons.length; i++) {
            langButtons[i].classList.remove('language__button--active');
        }
        langButtonCh.classList.add('language__button--active');
        });            
    }
