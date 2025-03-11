export function main () {

var header = document.querySelector('.main__header');
var repair = header.querySelector('.header__repair');
var group = header.querySelector('.header__group');
var divider = document.createElement('span');
divider.classList.add('header__divider');
var p = document.createElement('p');
p.classList.add('info__text');
var infoButtons = document.querySelectorAll('.info__button');
infoButtons[0].insertAdjacentElement('beforeBegin', p);
var buttons = document.querySelectorAll('.slide-menu__button');
var button1 = document.querySelector('.slide-menu__button--1');
var button2 = document.querySelector('.slide-menu__button--2');
var button3 = document.querySelector('.slide-menu__button--3');
var button4 = document.querySelector('.slide-menu__button--4');
var button5 = document.querySelector('.slide-menu__button--5');
var button6 = document.querySelector('.slide-menu__button--6');

 infoButtons[0].addEventListener ('click', function(){
    
    infoButtons[0].style.display = 'none';
    infoButtons[1].style.display = 'block';

    p.textContent = 'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem vel tenetur impedit iste incidunt delectus provident eius nulla sit sed dolorem porro fuga illum amet saepe, quia officia atque!';
 });

 infoButtons[1].addEventListener ('click', function(){

    infoButtons[1].style.display = 'none';
    infoButtons[0].style.display = 'block';

    if (window.innerWidth < 768) {
        p.textContent = '';
    } else if (window.innerWidth < 1366) {
        p.textContent = 'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера';
    } else {
        p.textContent = 'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.';
    }
 });

document.addEventListener ( 'DOMContentLoaded', function(){
    button1.classList.add('slide-menu__button--active');
    });

button1.addEventListener ( 'click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button1.classList.add('slide-menu__button--active');
    });

button2.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button2.classList.add('slide-menu__button--active');
    });

button3.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button3.classList.add('slide-menu__button--active');
    });

button4.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button4.classList.add('slide-menu__button--active');
    });
    
button5.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button5.classList.add('slide-menu__button--active');
    });

button6.addEventListener ('click', function(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slide-menu__button--active');
    }
    button6.classList.add('slide-menu__button--active');
    });

    
if (window.innerWidth < 1366) {
    repair.insertAdjacentElement('beforeBegin', divider);
}

if (window.innerWidth > 767) {

   p.textContent = 'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера';

   var call = document.createElement('a');
   call.classList.add('header__call');
   call.href = '#';
   repair.insertAdjacentElement('beforeBegin', call);
   call.style.display = 'inline';
    
    var chat = document.createElement('a');
    chat.classList.add('header__chat');
    chat.href = '#';
    repair.insertAdjacentElement('beforeBegin', chat);

    var profile = document.createElement('a');
    profile.classList.add('header__profile');
    profile.href = '#';
    repair.insertAdjacentElement('beforeBegin', profile);

    var dividerClone = divider.cloneNode();
    repair.insertAdjacentElement('beforeBegin', divider);
    group.insertAdjacentElement('beforeBegin', dividerClone);
}

if (window.innerWidth > 1365) {

    header.style.display = 'none';

    var demonstration = document.querySelector('.demonstration');

    var desktopRepair = document.createElement('a');
    desktopRepair.classList.add('demonstration__repair');
    desktopRepair.textContent = 'Оставить заявку';
    desktopRepair.href ='#';
    demonstration.insertAdjacentElement('beforeBegin', desktopRepair);

    var desktopCheckstatus = document.createElement('a');
    desktopCheckstatus.classList.add('demonstration__checkstatus');
    desktopCheckstatus.textContent = 'Статус ремонта';
    desktopCheckstatus.href ='#';
    demonstration.insertAdjacentElement('beforeBegin', desktopCheckstatus);

    p.textContent = 'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.';

}
}






