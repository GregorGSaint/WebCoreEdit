export function call() {

  var call = document.querySelector('.call');
  var callClose = document.querySelector('.call__close');
  var contactCall = document.querySelector('.contact__call');
  var main = document.querySelector('main');
  var menu = document.querySelector('.menu');
  var headerCall = document.querySelector('.header__call');
  
  call.style.display = 'none';

if (headerCall) {
  

  headerCall.addEventListener('click', function() {
    call.style.display = 'block';
    menu.style.display = 'none';
    main.style.opacity = '0.1';
  })
}

  contactCall.addEventListener('click', function() {
    call.style.display = 'block';
    main.style.opacity = '0.1';
    if (window.innerWidth > 767 && window.innerWidth < 1366) {
      menu.style.display = 'none';
     }
  })

  callClose.addEventListener('click', function() {
    call.style.display = 'none';
    main.style.opacity = '1';
  })

   window.addEventListener('click', function(e) {
     if (!e.target.closest('.call') && !e.target.closest('.contact__call') && !e.target.closest('.header__call') && !e.target.closest('.menu') && !e.target.closest('.header__chat') && !e.target.closest('.contact__chat') && !e.target.closest('.feedback') && !e.target.closest('.header__burger'))  {
       call.style.display = 'none';
       main.style.opacity = '1';
     }
   })
}



