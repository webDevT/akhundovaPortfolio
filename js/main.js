$(function(){





	$('.btn_menu').click(function(){

		$('.menu, .btn_row').toggleClass('active');



	});


$('.menu ul li').click(function(){

        $('.menu, .btn_row').removeClass('active');



    });


    $('.portfolio .button').click(function(){

        $('#add').show();
        $(this).hide();



    });

	$(".photo .wrapper .tab").click(function() {

		$(".photo .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");

 		$(".photo .tab_item").hide().eq($(this).index()).fadeIn()

}).eq(0).addClass("active");





$("#menu, #top").on("click","a", function (event) {



        //отменяем стандартную обработку нажатия по ссылке



        event.preventDefault();







        //забираем идентификатор бока с атрибута href



        var id  = $(this).attr('href'),







        //узнаем высоту от начала страницы до блока на который ссылается якорь



        top = $(id).offset().top;







        //анимируем переход на расстояние - top за 1500 мс



        $('body,html').animate({scrollTop: top}, 1500);



    });
$('.popup-with-form').magnificPopup({

        type: 'inline',

        preloader: false,

        focus: '#name',



        callbacks: {

            beforeOpen: function() {

                if($(window).width() < 700) {

                    this.st.focus = false;

                } else {

                    this.st.focus = '#name';

                }

            }

        }

    });
});
function viewDiv(){

  document.getElementById("add").style.display = "block";

};

$(window).scroll(function() {
if ($(this).scrollTop() > 50){
$('#top').addClass("sticky");


}
else{
$('#top').removeClass("sticky");

}
});

