// JavaScript File
$('div.container').css("width","100%");
$('div.container').css("padding","0");
//www.google material disign.com
//wow.js
//jquery scrollto
//yahoo ytl
$('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("body, html").animate( {
        scrollTop: destination}, 800);
        return false;
    });
    
    var timeAnimate = 200;
    
$(".house").on('click', function(e) {
   var modal = $('#modalDiv');
   modal.css('top', (window.innerHeight - modal.height()) / 4);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   $('.hard').toggleClass('hard1');
   modal.show(timeAnimate);
}) ; 

$(".cake").on('click', function(e) {
   var modal = $('#modalDiv');
   modal.css('top', (window.innerHeight - modal.height()) / 4);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   
   modal.show(timeAnimate);
});

$(".tent").on('click', function(e) {
   var modal = $('#modalDiv');
   modal.css('top', (window.innerHeight - modal.height()) / 4);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   
   modal.show(timeAnimate);
});

$(".game").on('click', function(e) {
   var modal = $('#modalDiv');
   modal.css('top', (window.innerHeight - modal.height()) / 4);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/game.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   
   modal.show(timeAnimate);
});

$(".safe").on('click', function(e) {
   var modal = $('#modalDiv');
   modal.css('top', (window.innerHeight - modal.height()) / 2);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/safe.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   
   modal.show(timeAnimate);
});

$(".boat").on('click', function(e) {
   var modal = $('#modalDiv');
//   var text1 = $('#somanytext');
  // text1.css('top', (window.innerHeight - text1.height()) / 2);
//   text1.css('left', (window.innerWidth - text1.width()) / 2);
  // text1.css('border', '50px');
//   text1.css('dispaly', 'block');
   modal.css('top', (window.innerHeight - modal.height()) / 4);
   modal.css('left', (window.innerWidth - modal.width()) / 2);
   modal.css('background-image', 'url(http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/submarine.png)');
   modal.css('background-repeat', 'no-repeat');
   modal.css('background-size', '100%');
   modal.css('z-index', '500');
   modal.css('border-radius', '50px');
   $("body").css('background-color', '#F5F5F5');
   //text1.show(timeAnimate);
   modal.show(timeAnimate);
});    
    
$('#modalDiv').on('click', function () {
   var modal = $('#modalDiv');
    modal.hide(timeAnimate);
});


 $('.handle').on('click', function()
           {
               $('nav ul').toggleClass('showing');
 });
 
