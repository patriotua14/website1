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
   modal.css('top', (window.innerHeight - modal.height()) / 4);
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
})

/*$('<p>In 1939, after the Polish September Campaign and the accompanying Soviet invasion, the Soviet occupiers permitted classes to continue. Until late 1939, the school worked in the pre-war Polish system. On October 18, however, the Polish rector, Professor Roman Longchamps de Bérier was dismissed, and was replaced by a prominent Ukrainian historian, Mykhailo Marchenko, grandfather of Ukrainian journalist and dissident Valeriy Marchenko. Marchenko was determined to transform the University of Lwow into the Ukrainian National University.[3] On January 8, 1940, the university was renamed Ivan Franko Lviv State University. Polish professors and administrative assistants were increasingly fired and replaced by Ukrainians or Russians, specializing in Marxism, Leninism, political economics, as well as Ukrainian and Soviet literature, history and geography. This was accompanied by the closing of departments seen as related with the religion, free-market economics, capitalism, or the West in general; this included Polish geography, literature, or history. Lectures were held in Ukrainian and Polish (as auxiliary). In the period 1939-1941 the Soviets also executed over a dozen members of the Polish faculty.</p>').css({ 
    'color': 'black',
    'font-size': '25px',
}
    ).appendTo('#modalDiv');
    
    $('#somanytext').on('click', function () {
         var text1 = $('#somanytext');
              text1.hide(timeAnimate);
    })*/
