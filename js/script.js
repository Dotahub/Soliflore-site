//Короче надо зырить видео
/*$(function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	if(ypos>600){
		top.style.height="70px";
	}
	else{
		top.style.height="100px";
	}
	window.addEventListener("scroll",Scroll);

})*/
var options = {
  	offset: 800
}
var header = new Headhesive('.main-header', options);


/*$(function hideheader(){
	var ypos = window.pageYOffset;
	var top = document.getElementById('main-header');
	if(ypos>=500){
		top.style.height="0px";
	}
	else{
		top.style.height="100px";
	}
	window.addEventListener("hide",hideheader);
})*/
/*(function textchange(){
	var div=document.getElementsByClassName('Mus');
	var style=div[0].style;
	var ypos=window.pageYOffset;
	{
		if(ypos>800)
		{
			style.color="Red";
		}
		else{
			style.color="White";
		}
	}
	
	
	console.log(div);
})();*/
//добавляет класс при скролле до определенного размера
//$(window).scrollTop() - расстояние от начала сайта до настоящего момента верхней границы
$(window).on("scroll", function() {
    if (($(window).scrollTop() > 800)&&($(window).scrollTop() < 1100)) $('.Mus').addClass('fixed');
          else $('.Mus').removeClass('fixed');
    });
$(window).on("scroll", function() {
    if (($(window).scrollTop() > 800)&&($(window).scrollTop() < 1100))$('.ALB').addClass('fixed2');
          else $('.ALB').removeClass('fixed2');
    });
/*$(document).ready(function(){
	$("menu").on("click","a", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$(body,html).animate({scrollTop:top},1500);
	});
});*/
//скролл до "якоря"
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 2400) $('.contact_sf').addClass('show_contact');
          else $('.contact_sf').removeClass('show_contact');
    });



