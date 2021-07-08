// вызов модального окна при отправке формы
$('form').on('submit', function(e) {
    var $form = $(this);
    e.preventDefault();
    var $data = $form.serialize();
    $.ajax({
        type: "POST",
        url: "/mail.php",
        data: $data,
        success: function(msg) {
            console.log('Success');
            console.log(msg);  
            $('#exampleModal').arcticmodal(); 
            $("#form")[0].reset();
        },
        error: function(msg) {
            console.log('Error');
            alert(msg);
        },
    });
  });
//   вызов всплаывающей формы с кнопок

$('.hidden_form_button').click(function() {
    $('#hidden_form').arcticmodal(); 
});

// слайдер отзывы
$('.multiple-items').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('.recommendation_slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });