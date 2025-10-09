 
//hamburger
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
$("#form").on('submit', function (event) {
  event.preventDefault();
  $('#form').validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Минимум 3 символа")
                  },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
  });
});
  

//mailer 
$('form').submit(function(e) {
        e.preventDefault();
        alert("hi!!")
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#modal').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

