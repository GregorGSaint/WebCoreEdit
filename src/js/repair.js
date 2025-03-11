export function repair() {

  var buttons = document.querySelectorAll('.repair__button');
  var list = document.querySelector('.repair__list');
  var elements = list.querySelectorAll('.swiper-slide');
  
  if (window.innerWidth>1119) {
    elements[3].style.display= 'block';
  }
  
  
  buttons[0].addEventListener('click', function() {
  
    buttons[0].style.display = 'none';
    buttons[1].style.display= 'block';
    
     if (window.innerWidth>1119) {
     for (var i = 4; i <  elements.length; i++) {
       elements[i].style.display= 'block';
     } 
   } else {
     for (var i = 3; i <  elements.length; i++) {
       elements[i].style.display= 'block';
     } 
   }
   });
  
   buttons[1].addEventListener('click', function() {
  
    buttons[1].style.display = 'none';
    buttons[0].style.display= 'block';
  
    if (window.innerWidth>1119) {
    for (var i = 4; i <  elements.length; i++) {
      elements[i].style.display = 'none';
   }
  } else {
    for (var i = 3; i <  elements.length; i++) {
      elements[i].style.display = 'none';
    }
   }  
  });
} 
