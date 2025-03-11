export function feedback() {

  var feedback = document.querySelector('.feedback');
  var feedbackClose = document.querySelector('.feedback__close');
  var contactChat = document.querySelector('.contact__chat');
  var main = document.querySelector('main');
  var menu = document.querySelector('.menu');
  var headerChat = document.querySelector('.header__chat');
    feedback.style.display = 'none';
 
    if (headerChat) {
      
   
      headerChat.addEventListener('click', function() {
        feedback.style.display = 'block';
        menu.style.display = 'none';
        main.style.opacity = '0.1';
      })
    }
   
      contactChat.addEventListener('click', function() {
        feedback.style.display = 'block';
        main.style.opacity = '0.1';
        if (window.innerWidth > 767 && window.innerWidth < 1366) {
         menu.style.display = 'none';
        }
      })
   
      feedbackClose.addEventListener('click', function() {
        feedback.style.display = 'none';
        main.style.opacity = '1';
      })
   
       window.addEventListener('click', function(e) {
          if (!e.target.closest('.feedback') && !e.target.closest('.contact__chat') && !e.target.closest('.header__chat') && !e.target.closest('.menu') && !e.target.closest('.header__call') && !e.target.closest('.contact__call') && !e.target.closest('.call') && !e.target.closest('.header__burger'))  {
           feedback.style.display = 'none';
            main.style.opacity = '1';
          }
        })
      }

    