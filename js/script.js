// import JustValidate from 'just-validate';

// const validate = new JustValidate('#form');
//hamburger
$(document).ready(function(){ 
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

close.addEventListener('click', () => {
   menu.classList.remove('active');
});

//percent 

const percents = document.querySelectorAll('.percent'),
      lines = document.querySelectorAll('.skills__percent-item-body span');

percents.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});


    //validate 
function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                check: {
                  required: true,
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                check: {
                  required: "Поставьте пожалуйста галочку."
                }
            }
        });
    }
    validateForms('#form');


//mailer 



$('form').submit(function (e) {
      e.preventDefault();
      if (!$(this).valid()) {
        return;
      }
      $.ajax({
        type:"POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
        $('.overlay, .modalka').fadeIn('slow');
        $('form').trigger('reset');
      });
      return false;
    });

//modal 
$('.modalka__close').on('click', function() {
        $('.overlay, .modalka').fadeOut('slow');
        $('body').css('overflow', 'visible');
        // window.location.reload(true);
    });


const form = document.querySelector('.contacts__form'),
      photo = document.querySelector('.contacts__photo');
photo.addEventListener('click', () => {
  console.log (form.checkValidity());
}
)
});

//ScrollMagic
var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("digit");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							// .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller)
              .addIndicators({
                name: '',
                colorTrigger: 'transparent', 
                colorStart: 'transparent',
                colorEnd: 'transparent'
              });
		}



