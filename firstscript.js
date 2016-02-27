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
    })
    
$("#navbar").removeClass("default");
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $("#navbar").addClass("default").fadeIn("fast");    
    } else {
        $("#navbar").removeClass("default").fadeIn("fast");
    };
});